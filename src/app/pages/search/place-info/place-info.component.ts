import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

import { Place } from 'src/app/core/core/services/api/here/here.service';

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceInfoComponent {
  @Input() place: Place;
  @Output() book = new EventEmitter<void>();
}
