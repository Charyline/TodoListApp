import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Item[]

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    })
  }

  delete(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe(data => {
      this.refresh()
    })
  }

  checkItem(item: Item) {

    item.checked = !item.checked
    this.itemService.updateItem(item).subscribe(data => {
      this.refresh()
    })
  }

}
