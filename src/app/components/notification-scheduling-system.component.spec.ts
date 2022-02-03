import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSchedulingSystemComponent } from './notification-scheduling-system.component';

describe('NotificationSchedulingSystemComponent', () => {
  let component: NotificationSchedulingSystemComponent;
  let fixture: ComponentFixture<NotificationSchedulingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationSchedulingSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSchedulingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
