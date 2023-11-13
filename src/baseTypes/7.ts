/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

function isWeekend(day: DaysOfWeek):string {
  if (day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday) {
    return 'weekend'
  }
  return 'weekday'
}




