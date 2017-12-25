import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { simpleReducer } from './simpleReducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      message: simpleReducer,
      post: postReducer,

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
