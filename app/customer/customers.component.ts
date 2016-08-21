import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [CustomerComponent],
    providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
    customers: any[];
    // customers: Promise<any[]>;
    // customers: Observable<any[]>;
    

    constructor(private _customerService: CustomerService) { }

    ngOnInit() { 
        this._customerService.getCustomers()
        .then((customers) => this.customers = customers)
        .catch((err) => {
            console.log(err);
        });
        //////////////////////////
        // Promise version
        //  this.customers = this._customerService.getCustomers().catch((err) => {
        //     console.log(err);
        //     return Observable.of(true);
        // });
        ////////////////////////////////
        // Rx Observable version
        // this.customers = this._customerService.getCustomers().catch((err) => {
        //     console.log(err);
        //     return Observable.of(true);
        // });
    }
}