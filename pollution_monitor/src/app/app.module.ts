import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HederCompComponent } from './heder-comp/heder-comp.component';
import { RightnavbarComponent } from './rightnavbar/rightnavbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapcompComponent } from './mapcomp/mapcomp.component';
import {FlexLayoutModule} from '@angular/flex-layout';
// in app module
@NgModule({
  declarations: [
    AppComponent,
    HederCompComponent,
    RightnavbarComponent,
    SidenavComponent,
    MapcompComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCiDqUFwOYKGJ4WcaZATJ2A9VF77ixy6Js'}),
  ],
  providers: [SidenavService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
