export interface NotificationSchedule{
    companyId: string;
    notifications: Date[];
}

export const emptySchedule: NotificationSchedule = {
    companyId: '',
    notifications: []
}