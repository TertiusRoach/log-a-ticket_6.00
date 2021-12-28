export namespace UseDatefy {
  export function forToday(format: String | '2000-01-01' | '00 Weekday, Month YYYY' | undefined) {
    switch (format) {
      case '2000':
        break;
      case '00 Weekday, Month YYYY':
        return '00 Weekday, Month YYYY';
        break;
      default:
        return "No function selected for todays' format";
    }
  }
}
