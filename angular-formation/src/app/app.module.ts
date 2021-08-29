import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { InterpolationComponent } from './components/01-interpolation/interpolation.component';
import { PropertyComponent } from './components/02-liaison_propriete/property-binding.component';
import { TitleComponent } from './components/title.component';

import { AppComponent } from './core/app.component';
import { IiiDirectivesStructurellesComponent } from './components/iii-directives-structurelles/iii-directives-structurelles.component';
import { EDirectiveAttributsComponent } from './components/e-directive-attributs/e-directive-attributs.component';
import { FEvenementComponent } from './components/f-evenement/f-evenement.component';
import { GInputComponent } from './components/g-input/g-input.component';
import { HOutputComponent } from './components/h-output/h-output.component';
import { IObservableComponent } from './components/i-observable/i-observable.component';
import { JServiceComponent } from './components/j-service/j-service.component';
import { KRoutingComponent } from './components/k-routing/k-routing.component';
import { AppRoutingModule } from './app-routing.module';
import { ParamsComponent } from './components/k-routing/params/params.component';
import { BackComponent } from './components/k-routing/back/back.component';
import { NotFoundComponent } from './components/k-routing/not-found/not-found.component';
import { LPipesComponent } from './components/l-pipes/l-pipes.component';

import localFr from '@angular/common/locales/fr';
import localDe from '@angular/common/locales/de';
import localJa from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { MReactiveFormsComponent } from './components/m-reactive-forms/m-reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localFr);
registerLocaleData(localDe);
registerLocaleData(localJa);

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InterpolationComponent,
    PropertyComponent,
    IiiDirectivesStructurellesComponent,
    EDirectiveAttributsComponent,
    FEvenementComponent,
    GInputComponent,
    HOutputComponent,
    IObservableComponent,
    JServiceComponent,
    KRoutingComponent,
    ParamsComponent,
    BackComponent,
    NotFoundComponent,
    LPipesComponent,
    ReversePipe,
    MReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'fr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
