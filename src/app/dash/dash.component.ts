import { Component, Input, OnInit } from '@angular/core';
import {iContentObj} from "../model";


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  @Input("contentObj") contentObj:Partial<iContentObj>={}

  constructor() { }

  ngOnInit(): void {
  }

}
