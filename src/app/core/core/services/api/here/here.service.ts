import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

interface PlaceAPIResponse {
  results: Place[];
}

export interface Place {
  title: string;
  highlightedTitle: string;
  vicinity: string;
  category?: string;
  href: string;
  type: string;
  resultType: string;
  position?: [number, number];
  categoryTitle?: string;
  id?: string;
  distance?: number;
}

@Injectable({
  providedIn: 'root'
})
export class HereApiService {
  private readonly apiUrl = environment.hereApi;
  private readonly apiKey = environment.hereApiKey;

  constructor(private httpClient: HttpClient) { }

  getPlaces(locationLatLongStr: string, searchPlace: string = 'hotel') {
    return this.httpClient.get<PlaceAPIResponse>(
      `${this.apiUrl}/autosuggest?at=${locationLatLongStr}&q=${searchPlace}&apiKey=${this.apiKey}`);
  }
}
