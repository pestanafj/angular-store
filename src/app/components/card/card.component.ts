import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


	@Input()
	cardGameCover:string="assets/ac-cover.jpg";
	@Input()
	cardGameType:string="GAME TYPE";
	@Input()
	cardGamePrice:string="R$ 0,00";
	@Input()
	cardGameLabel:string="LABEL";

	constructor(
	){}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

}
