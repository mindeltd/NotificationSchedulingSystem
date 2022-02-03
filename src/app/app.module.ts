import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationSchedulingSystemComponent } from './components/notification-scheduling-system.component';
import { NotificationComponent } from './components/notification/notification/notification.component';
import { NotificationProgressBarComponent } from './components/notification-progress-bar/notification-progress-bar.component';
import { StoreModule } from '@ngrx/store';
import { schedulesReducer } from './store/reducers/schedules.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects';
import { SchedulesEffects } from './store/effects/schedules.effect';
import { DatePipe } from '@angular/common'


@NgModule({
  declarations: [
    AppComponent,
    NotificationSchedulingSystemComponent,
    NotificationComponent,
    NotificationProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({'schedule': schedulesReducer}),
    EffectsModule.forRoot([SchedulesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
