import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";
@Component({
 selector: "app-quotes",
 templateUrl: "./quotes.component.html",
 styleUrls: ["./quotes.component.css"]
})
export class quoteComponent implements OnInit {
 quotes: Quote[]=[
   
 ];
 addNewQuote(quote) {
   
   this.quotes.push(quote);
   console.log(this.quotes);
 }
 constructor() {}
 ngOnInit() {}
}