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
    console.log("deleting " + itemId)
    this.itemService.deleteItem(itemId).subscribe(data => {
      this.refresh()
    })
  }

}
