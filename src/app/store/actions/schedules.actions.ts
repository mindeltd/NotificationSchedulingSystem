import { Action, createAction, props } from "@ngrx/store";
import { NotificationSchedule } from "src/app/models/notificationSchedule.model";

export const LOAD_SCHEDULES = '[Schedules] load schedules';
export const LOAD_SCHEDULES_FAIL = '[Schedules] load schedules fail';
export const LOAD_SCHEDULES_SUCCESS = '[Schedules] load schedules success';


export const loadSchedules = createAction(
    LOAD_SCHEDULES,
);

export const loadSchedulesFail = createAction(
    LOAD_SCHEDULES_FAIL
);

export const loadSchedulesSuccess = createAction(
    LOAD_SCHEDULES_SUCCESS,
    props<{schedule: NotificationSchedule}>()
);