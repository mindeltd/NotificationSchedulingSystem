import { Component, Input, OnInit } from '@angular/core';
import { initialProgress, NotificationProgress } from 'src/app/models/notificationProgress.model';
import { NotificationScheduleService } from 'src/app/services/notification-schedule.service';

import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {
  
  @Input() notification: Date = new Date();
  @Input() notificationProgress: NotificationProgress = initialProgress;
  @Input() index: number = 0;

  public dateToday: Date = new Date();
  public isNotificationOver: boolean = false;
  public progress: number = 100;

  public dateString: string = '';

  constructor(public datepipe: DatePipe) { 
  }

  ngOnInit(): void {
    this.compareDates();
    let dateString = this.datepipe.transform(this.notification, 'dd.MM.yyyy');
    this.dateString = dateString != null ? dateString : this.dateString;
  }

  private compareDates(){
    if(this.notification){
      this.isNotificationOver = NotificationScheduleService.compareDates(this.notification, this.dateToday);
    }
  }

}
