import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavecontactComponent } from './savecontact.component';

describe('SavecontactComponent', () => {
  let component: SavecontactComponent;
  let fixture: ComponentFixture<SavecontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavecontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
