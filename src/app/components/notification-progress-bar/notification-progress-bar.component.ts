import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-notification-progress-bar',
  templateUrl: './notification-progress-bar.component.html',
  styleUrls: ['./notification-progress-bar.component.sass']
})
export class NotificationProgressBarComponent implements OnInit {

  @Input() progress: number = 0;
  @Input() daysNumber: number = 0;

  constructor() { }

  ngOnInit(): void {}

}
