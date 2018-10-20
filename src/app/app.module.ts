import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SliderComponent } from './components/shared/slider/slider.component';



//Servicios
// import{ApinetService} from './services/apinet.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
     HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    // ApinetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
