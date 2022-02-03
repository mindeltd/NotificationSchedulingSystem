import { Component, OnInit } from '@angular/core';
import { NotificationScheduleService } from '../services/notification-schedule.service';
import { emptySchedule, NotificationSchedule } from '../models/notificationSchedule.model';
import { NotificationProgress } from '../models/notificationProgress.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app.state';
import * as ScheduleActions from '../store/actions/schedules.actions'


@Component({
  selector: 'app-notification-scheduling-system',
  templateUrl: './notification-scheduling-system.component.html',
  styleUrls: ['./notification-scheduling-system.component.sass']
})
export class NotificationSchedulingSystemComponent implements OnInit {

  public notificationSchedule: NotificationSchedule = emptySchedule;
  public notificationProgress: NotificationProgress[] = [];

  public notificationIndex?: number;
  public totalDaysNumber: number = 0;

  constructor(private notificationScheduleService: NotificationScheduleService, private store: Store<AppState>) {}

  ngOnInit(): void {

    this.store.dispatch(ScheduleActions.loadSchedules());
    this.notificationScheduleService.getScheduleFromStore().subscribe(schedule=>{
      this.notificationSchedule = schedule;
      this.getProgressBarIndex();
      this.getTotalDaysNumber();
    });
  }


  private getProgressBarIndex(){
    let dateToday = new Date();
    for(let i = 0; i < this.notificationSchedule.notifications.length - 1; i++){
      let daysBetween = this.getDaysBetweenDates(this.notificationSchedule.notifications[i], this.notificationSchedule.notifications[i+1]);
      let progress = this.notificationIndex == undefined ? 100 : 0;
        if(this.notificationSchedule.notifications[i].getTime() < dateToday.getTime() && dateToday.getTime() < this.notificationSchedule.notifications[i+1].getTime()){
          this.notificationIndex = i;
          progress = this.calculateProgressTillToday(this.notificationSchedule.notifications[i], this.notificationSchedule.notifications[i+1]);
        }      
      this.notificationProgress.push({progress: progress, numberOfDays: daysBetween, notificationIndex: 0});
    }
  }


  private calculateProgressTillToday(date1: Date, date2: Date){
    let totalDays = this.getDaysBetweenDates(date1, date2);
    let daysPassed = this.getDaysBetweenDates(date1, new Date());

    return Math.round(daysPassed / totalDays * 100);
  }

  private getDaysBetweenDates(date1: Date, date2: Date){
    let totalTime = date2?.getTime() - date1?.getTime();
    return Math.ceil(totalTime / (1000 * 3600 * 24));
  }

  private getTotalDaysNumber(){
    this.totalDaysNumber = this.getDaysBetweenDates(this.notificationSchedule.notifications[0],this.notificationSchedule.notifications[this.notificationSchedule.notifications.length - 1]);
  }

}
