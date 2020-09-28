import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DistancePipe } from 'src/app/core/core/pipes/distance.pipe';

import { PlaceInfoComponent } from './place-info.component';

describe('PlaceInfoComponent', () => {
  let component: PlaceInfoComponent;
  let fixture: ComponentFixture<PlaceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceInfoComponent, DistancePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
