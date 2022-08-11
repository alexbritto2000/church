import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Appservice } from '../../app.service';
import { HttpClient } from "@angular/common/http";

interface Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  Contact: Contact = {
    name: '',
    email: '',
    message: ''
  };

  contact: any;
  postId:any;
  errorMessage:any;

  constructor(private appService: Appservice,private http: HttpClient) { }

  ngOnInit(): void {
    this.appService.getContactData().subscribe(res => {
      this.contact = res.data[0];
      console.log(this.contact);
    })
  }
  onSubmit(value:any){
    console.log(value);
    //http://localhost:3000/mail;
    //this.http.post('http://localhost:3000/mail',value);

    this.http.post<any>('http://localhost:3000/mail', value).subscribe({
      next: data => {
          this.postId = data;
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
  }
}
