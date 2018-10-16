import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { SavecontactComponent } from './savecontact/savecontact.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import {ButtonModule,PanelModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {NgxsModule} from '@ngxs/store';

import { ContactserviceService } from './contactservice.service';
import {ContactState} from './store/contact.state';

@NgModule({
  declarations: [
    AppComponent,
    SavecontactComponent,
    ListcontactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([ ContactState]),
    ReactiveFormsModule,
   TableModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule

  ],
  providers: [ContactserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
