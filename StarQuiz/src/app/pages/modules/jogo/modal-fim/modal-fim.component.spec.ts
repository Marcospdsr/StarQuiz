import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFimComponent } from './modal-fim.component';

describe('ModalFimComponent', () => {
  let component: ModalFimComponent;
  let fixture: ComponentFixture<ModalFimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
