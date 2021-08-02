import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchange-details',
  templateUrl: './exchange-details.component.html',
  styleUrls: ['./exchange-details.component.css']
})
export class ExchangeDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const exchangeID = this.route.snapshot.paramMap.get('id');
    console.log('exchange detail page');
    console.log(exchangeID);
  }

}
