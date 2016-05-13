import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ContactService} from './contacts.service';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {Contact} from './contact';

@Component({
  template:`
  <form #myForm="ngForm" (ngSubmit)="onSubmit()">
    <div>
        <label for="first-name">First Name:</label>
        <input type='text' id='first-name'
            ngControl="firstName"
            [(ngModel)] = "newContact.firstName"
            required="required"
        />
    </div>
    <div>
        <label for="last-name">Last Name:</label>
        <input type='text' id='last-name'
        ngControl="lastName"
          [(ngModel)] = "newContact.lastName"
        required="required"
        />
    </div>
    <div>
        <label for="phone">Phone:</label>
        <input type='text' id='phone'
        ngControl="phone"
          [(ngModel)] = "newContact.phone"
        required="required"
        />
    </div>
    <div>
        <label for="email">Email:</label>
        <input type='text' id='email'
        ngControl="email"
          [(ngModel)] = "newContact.email"
        required="required"
        />
    </div>
    <button type="submit" [disabled] = "!myForm.form.valid">Create Contact</button>
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

      .ng-invalid{
        border: 1px solid red;
      }
    `],
    providers:[ContactService]
})


export class NewContactComponent implements OnInit {


    newContact: Contact;
    constructor(private _contactService: ContactService, private _router:Router, private _routeParams:RouteParams){

    }

    ngOnInit():any{
       this.newContact = {firstName:'', lastName:this._routeParams.get('lastName'), phone:'',email:'' };
    }

    onSubmit(){
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contacts']);
    }
}
