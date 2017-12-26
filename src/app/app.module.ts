import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { simpleReducer } from './simpleReducer';
import { postReducer } from './postReducer';
import {FormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({
      message: simpleReducer,
      post: postReducer,

    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
