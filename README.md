# NotificationSchedulingSystem

It is a notification scheduling system which takes notifications data from mock server and displays it as a schedule.
<br>
Example of a final result is shown in an image below:
![schedule](https://user-images.githubusercontent.com/51677037/152370686-f4effb8d-1c0b-4817-9004-d2733e28773e.PNG)
<br>
In schedule each notification is shown as a circle. Blue circle is shown if notification's date was already passed, otherwise user would see a white circle with grey borders. Between two neighbour notifications there is a number which shows a period of time (in days) that are separating these two notifications. Between two circles there is a progression bar that shows what part of a notification is already finished, E.g. if 3 out of 5 days were passed then 60% of a bar will be filled with blue color. Above the schedule there is a number of days that are between first and last notification.
<br>
<br>
There are four prepared notification response examples that are visible in 'src/app/services/notification-schedule.service.ts' file (lines 13-16). In order to use one them leave it uncommented.
![mockServer](https://user-images.githubusercontent.com/51677037/152371671-52ec78ea-5e6d-4ebb-9b2d-caa431c82226.PNG)
<br>
Example of a mock server response:
<br>
![mockResponse](https://user-images.githubusercontent.com/51677037/152374243-62176b9e-fb38-49b8-8b5f-11b32d99bad8.PNG)

<br>
<br>

Technoloagies I used during this project:
<br>
Angular framework
<br>
Angular ngrx library




