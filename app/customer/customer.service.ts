import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
    getCustomers() {
        return [
            {id: 1, name : 'Ward' },
            {id: 2, name : 'Kevin' },
            {id: 3, name : 'John' },
            {id: 4, name : 'Sally' },
            {id: 5, name : 'Emmet' }
        ];
    }
    constructor() { }

}