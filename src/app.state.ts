import { SchedulesState } from "./app/store/reducers/schedules.reducer";


export interface AppState{
    readonly schedule: SchedulesState;
}