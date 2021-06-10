import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../services/messenger.service'
import { Items } from '../../Items';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  checkoutList = [];
  counter;
  itemsCart;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Items) => {
      this.addToCart(product)
    })
  }
  deleteTask(product: Items) {
    for (let i in this.checkoutList) {
      if (this.checkoutList[i].id === product.id) {
        if (this.checkoutList[i].qty > 0) {
          this.checkoutList[i].qty--
          this.itemsCart--
          this.counter -= this.checkoutList[i].price
          if (this.checkoutList[i].qty === 0) {
            let index = this.checkoutList.indexOf(this.checkoutList[i].id)
            this.checkoutList.splice(index, 1)
          }
        }
      }
    }
  }
  removeItem(array, n) {
    return array.filter((x, i) => i != n)
  }
  addToCart(product: Items) {

    let productExists = false

    for (let i in this.checkoutList) {
      if (this.checkoutList[i].id === product.id) {
        this.checkoutList[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.checkoutList.push({
        id: product.id,
        name: product.name,
        qty: 1,
        price: product.price
      })
    }

    this.counter = 0
    this.itemsCart = 0
    this.checkoutList.forEach((item: Items) => {
      this.counter += (item.price * item.qty)
      this.itemsCart += item.qty
    })
  }

  pay() {
    console.log('paid');
  }

}


