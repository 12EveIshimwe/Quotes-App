import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { quote } from "../quote";
@Component({
 selector: "app-quote-form",
 templateUrl: "./quote-form.component.html",
 styleUrls: ["./quote-form.component.css"]
})
export class QuoteFormComponent implements OnInit {
 newQuote = new quote();
 @Output() addQuote= new EventEmitter<quote>();
 submitQuote(){
   this.addQuote.emit(this.newQuote);
 }
 constructor() {}
 ngOnInit() {}
}
