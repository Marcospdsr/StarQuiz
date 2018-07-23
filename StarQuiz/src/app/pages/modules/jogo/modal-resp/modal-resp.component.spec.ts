import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRespComponent } from './modal-resp.component';

describe('ModalRespComponent', () => {
  let component: ModalRespComponent;
  let fixture: ComponentFixture<ModalRespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
