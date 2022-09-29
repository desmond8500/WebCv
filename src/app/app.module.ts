import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './pages/cv/cv.component';
import { HeaderComponent } from './pages/cv/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetencesComponent } from './pages/cv/competences/competences.component';
import { ExperiencesComponent } from './pages/cv/experiences/experiences.component';
import { FormationsComponent } from './pages/cv/formations/formations.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HeaderComponent,
    CompetencesComponent,
    ExperiencesComponent,
    FormationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
