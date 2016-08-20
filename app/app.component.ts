import { Component } from '@angular/core';

import { CustomersComponent } from './customer/customers.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent]
})
export class AppComponent {

    // [] property binding , Component to Dom
    // () event binding , Dom to Component 

    title = 'Dumpster Fire App';
    name = 'Ward';
    wardsColor = 'blue';
    customers = [
            {id: 1, name : 'Ward' },
            {id: 2, name : 'Kevin' },
            {id: 3, name : 'John' },
            {id: 4, name : 'Sally' },
            {id: 5, name : 'Emmet' }
        ];

    changeSuitColor() {
        this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
    }
 }
