import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';

import { Appservice } from '../../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})

export class TimeComponent{

  title = 'fullcal';
  time:any;
  Events: any[] = [];
  
  /*------------------------------------------
  --------------------------------------------
  Define calendarOptions
  --------------------------------------------
  --------------------------------------------*/
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this)
  };
  MyDestroy: any;
  
  /*------------------------------------------
  --------------------------------------------
  Define constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient,private appService: Appservice) {}
  
  /*------------------------------------------
  --------------------------------------------
  Define ngOnInit()
  --------------------------------------------
  --------------------------------------------*/
  ngOnInit() {
        /* this.httpClient
        .get('http://localhost:8001/events.php')
        .subscribe((res: any) => {
          this.Events = res;
          this.calendarOptions.events = this.Events;
        }); */
        
        this.appService.getJsonServerData().subscribe(res => {
          this.time = res.data;
          console.log(this.time);
          this.Events =  this.time;
          console.log(this.Events);
          this.calendarOptions.events = this.Events;
        });
  }
  /*------------------------------------------
  --------------------------------------------
  Define handleDateClick()
  --------------------------------------------
  --------------------------------------------*/
  handleDateClick(arg: any) {
    console.log(arg);
    this.Events
    alert('date click! ' + arg.dateStr );
  }
}
