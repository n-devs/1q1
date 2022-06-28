import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Question 1
  num = 0;
  values = true;


  onKey(event: any) {
    this.num = event.target.value
  }

  ChangingValue(event: any) {

    switch (event.target.value) {
      case "0":
        this.values = Number.isInteger(this.num)
        break;
      case "1":
        this.values = !Number.isInteger(this.num)
        break;
      default:
        break;
    }

  }

  // end Question 1




}
