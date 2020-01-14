import { Routes } from '@angular/router';
import { ListItemsComponent } from './items/list-items/list-items.component';
import { UpdateItemComponent } from './items/update-item/update-item.component';

export const appRoutes: Routes = [

  { path: 'item/update/:id', component: UpdateItemComponent },

  { path: '', component: ListItemsComponent }
]
