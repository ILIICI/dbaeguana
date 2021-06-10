import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Items } from 'src/app/Items';


@Component({
  selector: 'app-checkoutitem',
  templateUrl: './checkoutitem.component.html',
  styleUrls: ['./checkoutitem.component.sass']
})
export class CheckoutitemComponent implements OnInit {
  @Input() cartItem: Items
  @Output() deleteTask: EventEmitter<Items> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  delete() {
    this.deleteTask.emit(this.cartItem)
  }
}
