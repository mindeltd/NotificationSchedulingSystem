import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AppState } from 'src/app.state';
import { NotificationSchedule } from '../models/notificationSchedule.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationScheduleService {

  // readonly ROOT_URL = 'https://e635453e-cb88-4d5b-956f-ffb231e61696.mock.pstmn.io/notifications/1';
  // readonly ROOT_URL = 'https://e635453e-cb88-4d5b-956f-ffb231e61696.mock.pstmn.io/notifications/2';
  // readonly ROOT_URL = 'https://e635453e-cb88-4d5b-956f-ffb231e61696.mock.pstmn.io/notifications/3';
  readonly ROOT_URL = 'https://e635453e-cb88-4d5b-956f-ffb231e61696.mock.pstmn.io/notifications/4';


  constructor(private http: HttpClient,
              private store: Store<AppState>) {}



  public getNotificationSchedule(): Observable<NotificationSchedule>{

    return this.http.get<NotificationSchedule>(this.ROOT_URL).pipe(
      map((schedule)=>{
        schedule.notifications.forEach((notification, index) =>{
          schedule.notifications[index] = this.setDate(notification);
        });
        return schedule;
      })
    );

  }

  public getScheduleFromStore(): Observable<NotificationSchedule>{
    return this.store.select('schedule').pipe(map(schedule => schedule.data));
  }


  public static compareDates(date1: Date, date2: Date){
    return date1.getTime() < date2.getTime();
  }


  private setDate(date: Date): Date{
    let dayMonthYear = date.toString().split('/');
    let newDateString = dayMonthYear[2] + '-' + dayMonthYear[1] + '-' + dayMonthYear[0];
    let d = new Date(newDateString);
    return new Date(newDateString);
  }


}
