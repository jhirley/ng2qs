import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
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
