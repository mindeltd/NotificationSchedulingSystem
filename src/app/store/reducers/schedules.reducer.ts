import { NotificationSchedule, emptySchedule } from "src/app/models/notificationSchedule.model";
import * as fromSchedules from "../actions/schedules.actions"
import { Action, createReducer, on } from "@ngrx/store";


export interface SchedulesState{
    data: NotificationSchedule;
    loaded: boolean,
    loading: boolean
}

export const initialState: SchedulesState = {
    data: emptySchedule,
    loaded: false,
    loading: false
}


export const schedulesReducer = createReducer(
    initialState,
    on(fromSchedules.loadSchedules, (state, action) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(fromSchedules.loadSchedulesFail, (state, action) => {
        return {
            ...state,
            loading: false,
            loaded: false
        }
    }),
    on(fromSchedules.loadSchedulesSuccess, (state, action) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            data: action.schedule
        }
    })
);