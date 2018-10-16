import {Contact} from '../Contact';


export class AddContact {
  static readonly type = 'Add Contact';

  constructor(public payload: Contact) { }
}

export class DeleteContact {
    static readonly type = 'Delete Contact';

    constructor(public payload: Contact) { }
}


export class UpdateContacts {
  static readonly type = 'Update Contact';

  constructor(public payload: Contact) { }
}
