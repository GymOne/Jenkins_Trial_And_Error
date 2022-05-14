import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise/exercise.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ExerciseState} from "./shared/stores/states/exercise.state";
import {environment} from "../environments/environment";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxsModule} from "@ngxs/store";

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxsModule.forRoot([ExerciseState], {
      developmentMode: !environment.production
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


