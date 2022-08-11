import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MinistryComponent } from './pages/ministry/ministry.component';
import { WomenFellowshipComponent } from './pages/ministry/women-fellowship/women-fellowship.component';
import { YouthFellowshipComponent } from './pages/ministry/youth-fellowship/youth-fellowship.component';
import { ChildrenMinistryComponent } from './pages/ministry/children-ministry/children-ministry.component';
import { HistoryComponent } from './pages/history/history.component';
import { TimeComponent } from './pages/time/time.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import "node_modules/@fullcalendar/common/main.css";
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Appservice } from './app.service';
import { FormsModule }   from '@angular/forms';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MinistryComponent,
    WomenFellowshipComponent,
    YouthFellowshipComponent,
    ChildrenMinistryComponent,
    HistoryComponent,
    TimeComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Appservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
