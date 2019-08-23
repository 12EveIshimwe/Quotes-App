import { Component, OnInit } from "@angular/core";
import { quote } from "../quote";
@Component({
 selector: "app-quote",
 templateUrl: "./quote.component.html",
 styleUrls: ["./quote.component.css"]
})
export class quoteComponent implements OnInit {
 quotes: quote[]=[
   
 ];
 addNewQuote(quote) {
   
   this.quotes.push(quote);
   console.log(this.quotes);
 }
 constructor() {}
 ngOnInit() {}
}