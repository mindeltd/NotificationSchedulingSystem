import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, map, tap } from "rxjs";
import { AppState } from "src/app.state";
import { NotificationScheduleService } from "src/app/services/notification-schedule.service";

import * as scheduleActions from '../actions/schedules.actions';

@Injectable()
export class SchedulesEffects {
    loadScheduless$ = createEffect(()=>
        this.actions$.pipe(
            ofType(scheduleActions.loadSchedules),
            concatMap(action => 
                this.notificationScheduleService.getNotificationSchedule()),
                map(schedule => this.store.dispatch(scheduleActions.loadSchedulesSuccess({schedule})))
        ), {dispatch: false});


    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private notificationScheduleService: NotificationScheduleService){}

}