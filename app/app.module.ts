import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/home/about.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [ BrowserModule],
    declarations: [AppComponent, NavbarComponent, JumbotronComponent, HomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
