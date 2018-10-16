import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 import {Contact} from './Contact'
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  public viewContact: Subject<Contact> = new Subject<Contact>();
  public updateContact: Subject<Contact> = new Subject<Contact>();
  public deleteContact: Subject<boolean> = new Subject<boolean>();

}
