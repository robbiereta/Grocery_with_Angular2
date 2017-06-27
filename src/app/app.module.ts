import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { GroceryComponent } from './app.grocery';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
