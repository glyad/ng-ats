import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-contact-list',
  templateUrl: './contactList.component.html',
  styleUrls: ['./contactList.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello ContactListComponent!');
  }
}

