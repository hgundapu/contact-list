import {Component, OnInit} from '@angular/core';
import {ContactserviceService} from '../contactservice.service';
import {Contact} from '../Contact';
import {AddContact, UpdateContacts} from "../store/contact.actions";
import {Store} from '@ngxs/store';
import {ContactState} from "../store/contact.state";

@Component({
  selector: 'app-savecontact',
  templateUrl: './savecontact.component.html',
  styleUrls: ['./savecontact.component.css']
})
export class SavecontactComponent implements OnInit {
  title = 'Add a contact';
  action = 'Save';
  contact: Contact = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    city: '',
    country: ''
  };
  isSave = true;
  isView = false;
  errorMessages = [];

  constructor(private contactService: ContactserviceService, private store: Store) {
  }

  ngOnInit() {
    this.contactService.viewContact.subscribe(value => {
      this.errorMessages = [];
      this.contact = value;
      this.isView = true;
      this.title = 'View contact of ' + value.firstname;
    });
    this.contactService.updateContact.subscribe(value => {
      this.errorMessages = [];
      this.isView = false;
      const updateDetails = Object.assign({}, value);
      this.contact = updateDetails;
      this.isSave = false;
      this.title = 'Update a contact of ' + value.firstname;
      this.action = 'Update';
    });
    this.contactService.deleteContact.subscribe(value => {
      this.clear();
    });
  }

  save() {
    const contactDetails = Object.assign({}, this.contact);
    if (this.isValidate()) {
      if (this.isSave) {
        this.store.dispatch(new AddContact(
          contactDetails
        ));
      } else {
        this.store.dispatch(new UpdateContacts(
          contactDetails
        ));
      }
      this.clear();
    }


  }

  isValidate() {
    this.errorMessages = [];
    let isValid = true;
    const phNo = this.contact.phone.replace(/[\(\)\.\-\ ]/g, '')
    if (phNo === '' || isNaN(parseInt(phNo)) || (phNo.length !== 10)) {
      isValid = false;
      this.errorMessages.push('Please Enter Valid Ph No.');
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact.email))) {
      isValid = false;
      this.errorMessages.push('Please Enter Valid Email');
    }

    this.store.select(ContactState.getContacts).subscribe(value => {
      const duplicates = value.filter(val => val.phone === this.contact.phone);
      if (duplicates.length > 0 && this.isSave) {
        isValid = false;
        this.errorMessages.push('The Entered Contact Number Already Existed');
      }
      console.log(this.errorMessages);
    })
    return isValid;

  }

  clear() {
    this.errorMessages = [];
    this.isSave = true;
    this.isView = false;
    this.action = 'Save';
    this.title = 'Add a contact';
    this.contact = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      city: '',
      country: ''
    };
  }
}
