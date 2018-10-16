import { Action, Selector, State, StateContext } from '@ngxs/store';
import {Contact} from '../Contact';
import {AddContact, DeleteContact, UpdateContacts} from './contact.actions';

export class ContactStateModel {
  readonly contacts: Contact[]
}
@State<ContactStateModel>({
  name: 'contacts',
  defaults: {
    contacts: [ ]
  }
})

export class ContactState {
  @Selector()
  static getContacts(state: ContactStateModel) {
    return state.contacts;
  }


  @Action(AddContact)
  save(context: StateContext<ContactStateModel>, action: AddContact) {
    const state = context.getState();
    state.contacts.push(action.payload)
    context.patchState({
      contacts: state.contacts
    });
  }

  @Action(DeleteContact)
  remove(context: StateContext<ContactStateModel>, action: DeleteContact) {
    const state = context.getState();
    const values = state.contacts.filter(val => val.phone !==  action.payload.phone)
    console.log(values);
    context.patchState({
        contacts: values
    })
  }



  @Action(UpdateContacts)
  update(context: StateContext<ContactStateModel>, action: UpdateContacts) {
    const state = context.getState();
    const index = state.contacts.map(e => e.phone).indexOf(action.payload.phone);
    state.contacts[index] = action.payload;
    context.patchState({
      contacts: state.contacts
    });
  }

}
