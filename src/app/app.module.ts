import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pwcwcModule } from './pwc-app/pwc.module';

@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    pwcwcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
