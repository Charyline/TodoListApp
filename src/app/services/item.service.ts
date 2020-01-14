import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../items/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/server/items')
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>('/server/item/' + id)
  }

  createItem(item: Item) {

    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

    return this.http.put<Item>('/server/item', item, options)
  }

  updateItem(item : Item) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

    return this.http.post<Item>('/server/item', item, options)
  }

  deleteItem(id: number) {

    return this.http.delete('/server/item/' + id)
  }
}
