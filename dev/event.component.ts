import {Component} from 'angular2/core'

@Component({
  selector:'event',
  template: `<ul>
                <li *ngFor='#contact of contacts'
                  (click)='onSelect(contact)'
                  [class.is-awesome]='showdetails===true'>
                  {{contact.firstname}} {{contact.lastname}}
                </li>
              </ul>
              <input [(ngModel)]='selectedContact.firstname' type='text'/>
              <div>
                <p>{{selectedContact.phone}}</p>
                <p>{{selectedContact.email}}</p>
              </div>
            `,
  styleUrls:['../src/css/test.css']
})

export class eventComponent{
  public selectedContact = {};
  onSelect(contact){
    this.selectedContact = contact;
  }
  public contacts = [
                    {firstname:'Rohit', lastname:'Kawade', phone:'9028144969', email:'rohit.kawade@globant.com'},
                    {firstname:'Amruta', lastname:'Kawade', phone:'1234567891', email:'amruta.kawade@globant.com'},
                    {firstname:'Prachi', lastname:'Kawade', phone:'9998887776', email:'prachi.kawade@globant.com'},
                    {firstname:'Vandana', lastname:'Kawade', phone:'323918312', email:'vandana.kawade@globant.com'},
                    {firstname:'Rajendra', lastname:'Kawade', phone:'31279873', email:'rajendra.kawade@globant.com'}
                    ];

}
