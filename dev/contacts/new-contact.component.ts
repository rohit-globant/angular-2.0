import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ContactService} from './contacts.service';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {Contact} from './contact';

@Component({
  template:`
  <form #myForm="ngForm">
    <div>
        <label for="first-name">First Name:</label>
        <input type='text' id='first-name'
            ngControl="firstName"
            required="required"
        />
    </div>
    <div>
        <label for="last-name">Last Name:</label>
        <input type='text' id='last-name'
        ngControl="lastName"
        required="required"
        />
    </div>
    <div>
        <label for="phone">Phone:</label>
        <input type='text' id='phone'
        ngControl="phone"
        required="required"
        />
    </div>
    <div>
        <label for="email">Email:</label>
        <input type='text' id='email'
        ngControl="email"
        required="required"
        />
    </div>
    <button type="submit">Create Contact</button>
  </form>
  `,
  styles:[`
      label{
          display:inline-block;
          width:150px;
      }

      input{
        width:250px;
      }
    `],
    providers:[ContactService]
})


export class NewContactComponent implements OnInit {

    public passed_lastName ="";
    constructor(private _contactService: ContactService, private _router:Router, private _routeParams:RouteParams){

    }

    ngOnInit():any{
       this.passed_lastName = this._routeParams.get('lastName');
    }
    onAddContact(firstName,lastName,phone,email){
        let contact:Contact = {firstName:firstName, lastName:lastName, phone:phone,email:email};
        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts']);
    }
}
