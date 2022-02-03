export interface NotificationProgress{
    notificationIndex: number;
    progress: number;
    numberOfDays: number;
}

export const initialProgress = {
    notificationIndex: 0,
    progress: 0,
    numberOfDays: 0
}