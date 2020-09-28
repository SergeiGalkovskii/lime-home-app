// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { SearchRouter } from './search.routing';
import { environment } from 'src/environments/environment';

import { DistancePipe } from 'src/app/core/core/pipes/distance.pipe';

import { PlaceInfoComponent } from './place-info/place-info.component';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        CommonModule,
        NgxMapboxGLModule.withConfig({
            accessToken: environment.mapBoxAccessToken,
        }),
        SearchRouter
    ],
    exports: [SearchComponent],
    declarations: [SearchComponent, DistancePipe, PlaceInfoComponent]
})
export class SearchModule { }
