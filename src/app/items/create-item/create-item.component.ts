import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';
import { Item } from '../item';

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  itemForm: FormGroup;
  @Output() refreshEvent = new EventEmitter()

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.itemForm = new FormGroup({
      itemValue: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {

    let item = new Item()
    item.value = this.itemForm.controls.itemValue.value

    this.itemService.createItem(item)
      .subscribe(data => {
        this.refreshEvent.emit()
      })
  }

}
