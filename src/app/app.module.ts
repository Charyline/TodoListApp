import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateItemComponent } from './items/create-item/create-item.component';
import { ListItemsComponent } from './items/list-items/list-items.component';
import { UpdateItemComponent } from './items/update-item/update-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    ListItemsComponent,
    UpdateItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
