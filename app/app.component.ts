import { Component } from '@angular/core';
// import { CustomersComponent } from './customer/customers.component';
// import { CustomerService } from './customer/customer.service';

import { CustomersComponent, CustomerService } from './customer/index';

import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [HTTP_PROVIDERS, CustomerService]
})
export class AppComponent {

    // [] property binding , Component to Dom
    // () event binding , Dom to Component 

    title = 'Dumpster Fire App';
    name = 'Ward';
    wardsColor = 'blue';


    changeSuitColor() {
        this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
    }
 }
