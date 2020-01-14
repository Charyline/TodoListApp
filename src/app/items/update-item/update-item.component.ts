import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../item';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  itemForm: FormGroup;
  item: Item

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit() {

    this.itemForm = new FormGroup({
      itemId: new FormControl(null, Validators.required),
      itemValue: new FormControl(null, Validators.required)
    })

    let itemId = this.route.snapshot.params['id']

    this.itemService.getItem(itemId).subscribe(data => {
      this.item = data
      this.itemForm.controls.itemId.setValue(this.item.id)
      this.itemForm.controls.itemValue.setValue(this.item.value)
    })
  }

  onSubmit() {

    let item = new Item()
    item.id = this.itemForm.controls.itemId.value
    item.value = this.itemForm.controls.itemValue.value

    this.itemService.updateItem(item)
      .subscribe(data => {
        this.router.navigate([''])
      })
  }
}
