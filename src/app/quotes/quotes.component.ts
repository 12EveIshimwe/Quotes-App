import { Component, OnInit } from "@angular/core";
import { quotes } from "../quote";
@Component({
 selector: "app-quote",
 templateUrl: "./quote.component.html",
 styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
 quotes: quotes[]=[
   
 ];
 addNewQuote(quote) {
   
   this.quotes.push(quote);
   console.log(this.quotes);
 }
 constructor() {}
 ngOnInit() {}
}