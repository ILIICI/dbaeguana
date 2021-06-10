import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Items } from '../../Items';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  items: Items[] = [];
  search = "";
  filter = "";
  isClicked = false;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }

  clicked($var) {
    if (this.isClicked === false) {
      this.filter = $var;
      this.isClicked = true;
    } else {
      this.filter = ""
      this.isClicked = false
    }

  }
}
