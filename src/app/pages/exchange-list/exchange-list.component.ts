import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.css']
})
export class ExchangeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('exchange list page');
  }

}
