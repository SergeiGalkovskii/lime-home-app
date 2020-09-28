import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Map } from 'mapbox-gl';
import { HereApiService, Place } from 'src/app/core/core/services/api/here/here.service';

const DEFAULT_CENTER = [-74.5, 40];

@Component({
  selector: 'app-map',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isLoading: boolean;

  style = 'mapbox://styles/mapbox/streets-v9';
  zoom = 12;
  center = DEFAULT_CENTER;
  mapCenter = DEFAULT_CENTER;
  markers = [];
  map: Map;
  activeMarker: Place;

  constructor(private hereApiService: HereApiService) {
  }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getUserLocationSuccess.bind(this), this.getUserLocationError.bind(this));
    }
  }

  getUserLocationSuccess(position: { coords: { latitude: number, longitude: number }, timestamp: number }): void {
    const { coords: { latitude, longitude } } = position;
    this.center = [longitude, latitude];
    this.mapCenter = [longitude, latitude];
    this.isLoading = false;
    this.getPlaces();
  }

  getUserLocationError(): void {
    this.isLoading = false;
    this.getPlaces();
  }

  getPlaces(): void {
    if (Array.isArray(this.mapCenter) && this.mapCenter[0] && this.mapCenter[1]) {
      this.hereApiService.getPlaces(`${this.mapCenter[1]},${this.mapCenter[0]}`).
        pipe(
          map(res => res.results.map(item => ({ ...item }))),
        ).
        subscribe(places => {
          this.markers = places.filter(place => !!place.position);
          if (this.activeMarker && !this.markers.find(marker => marker.id === this.activeMarker.id)) {
            this.markers.push(this.activeMarker);
          }
        });
    }
  }

  onClickMarker(marker: Place): void {
    this.map.flyTo({ center: [marker.position[1], marker.position[0]] });
    this.activeMarker = marker;
    this.mapCenter = [marker.position[1], marker.position[0]];
  }

  onMoveEnd(): void {
    this.mapCenter = this.map.getCenter().toArray();
    this.getPlaces();
  }

  onBook() {
    this.activeMarker = null;
  }
}
