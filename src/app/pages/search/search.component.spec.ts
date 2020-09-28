import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { DistancePipe } from 'src/app/core/core/pipes/distance.pipe';
import { PlaceInfoComponent } from './place-info/place-info.component';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxMapboxGLModule.withConfig({
        accessToken: '123123123',
      }), HttpClientModule],
      declarations: [SearchComponent, DistancePipe, PlaceInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
