import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contacts.service';
import {Contact} from './contact';

@Component({
  selector:'contact-list',
  template:`<ul>
                <li *ngFor='#contact of contacts'
                  (click)='onSelect(contact)'
                  [class.is-awesome]='selectedContact===contact'>
                  {{contact.firstName}} {{contact.lastName}}
                </li>
              </ul>
              <contact *ngIf="selectedContact !==null" [contact]='selectedContact'></contact>
              `,
  directives:[ContactComponent],
  providers:[ContactService],
  styleUrls:['../src/css/test.css']
})


export class ContactListComponent implements OnInit{
  public contacts : Contact[];
  public selectedContact = null;

  ngOnInit():any{
  this.getContacts();
  }
  getContacts(){
    this._contactService.getContacts().then((contacts:Contact[]) => this.contacts = contacts);
  }

  constructor(private _contactService: ContactService){

  }

  onSelect(contact){
    this.selectedContact = contact;
  }
}
