import {Component, OnInit} from '@angular/core';
import {Contact} from '../Contact';
import {Select, Store} from '@ngxs/store';
import {ContactserviceService} from '../contactservice.service';
import {ContactState} from '../store/contact.state';
import {Observable} from 'rxjs';
import {DeleteContact} from "../store/contact.actions";

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {

  contacts: Observable<Contact[]>;

  constructor(private contactService: ContactserviceService, private store: Store) {
  }

  viewDetails(contact) {
    this.contactService.viewContact.next(contact);
  }

  updateContact(contact) {
    this.contactService.updateContact.next(contact);
  }

  deleteContact(contact) {
    this.contactService.deleteContact.next(true);
    this.store.dispatch(new DeleteContact(contact));
  }

  ngOnInit() {
    this.contacts = this.store.select(ContactState.getContacts);
  }
}
