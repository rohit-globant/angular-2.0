import {Component} from 'angular2/core';
import {testComponent} from './test.component';
import {ContactListComponent} from './contacts/contact-list.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {NewContactComponent} from './contacts/new-contact.component';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
              <a [routerLink]="['Contacts']">Contacts</a>
              <a [routerLink]="['NewContact']">New Contact</a>
            </nav>
        </header>
        <div class="main">
          <router-outlet></router-outlet>
        </div>
        <!--<h1>Angular 2 Boilerplate</h1>
        <test></test> -->
    `,
    directives:[testComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
      {path:'/contacts',name:'Contacts', component:ContactListComponent, useAsDefault:true},
      {path:'/newcontact',name:'NewContact', component:NewContactComponent},
        {path:'/newcontact/:lastName',name:'NewContactFromContact', component:NewContactComponent}
])

export class AppComponent {
}
