import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { ChartistModule} from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";

@NgModule({
    imports: [
        CommonModule,
        FullPagesRoutingModule,
        FormsModule,
        ChartistModule,
        AgmCoreModule,
        NgbModule
    ],
    declarations: [       
        GalleryPageComponent,
        UserProfilePageComponent,
    ]
})
export class FullPagesModule { }
