import { Component, OnInit } from '@angular/core';
import { quotes } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: quotes[] = [
    new quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new quotes(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new quotes(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    new quotes(4,'Get Dog Food','Pupper likes expensive snacks'),
    new quotes(5,'Solve math homework','Damn Math'),
    new quotes(6,'Plot my world domination plan','Cause I am an evil overlord'),

  constructor() { }

  ngOnInit() {
  }

}
