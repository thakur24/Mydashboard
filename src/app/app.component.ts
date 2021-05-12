import { Component } from '@angular/core';
import { iContentObj } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydashboard';
  data:Array<iContentObj> =[
    {
      title:"Earnings (Monthly)",
      amount:"$10,00"

    },
    {
      title:"Earnings (Annualy)",
      amount:"$270,00"

    },
    {
      title:"Tasks",
      amount:"40%"

    },
    {
      title:"Pending Requests",
      amount:"15"

    },

  ]
}
