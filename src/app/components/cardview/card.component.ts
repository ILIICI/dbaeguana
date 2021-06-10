import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../../Items';
import { MessengerService } from '../../services/messenger.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input()
  item: Items;
  @Input()
  desc: Items;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }
  AddtoCart() {
    this.msg.sendMsg(this.item)
  }

}
