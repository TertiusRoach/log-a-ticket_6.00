export namespace UseDatefy {
  export function forToday(format: String | '2000-01-01' | '00 Weekday, Month YYYY' | undefined) {
    const presentDate: String = Date();

    switch (format) {
      case '2000':
        return '2000';
      case '00 Weekday, Month YYYY':
        let result: String;

        let monthDay: String | Number = presentDate.split(' ')[2];

        const weekdayEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekdagAF = ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'];
        let weekday = weekdayEN[new Date().getDay()];
        let weekdag = weekdagAF[new Date().getDay()];

        const monthEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const maandAF = ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'];
        let month = monthEN[new Date().getMonth()];
        let maand = maandAF[new Date().getMonth()];

        let year: String = presentDate.split(' ')[3];

        return `${monthDay} ${weekday}, ${month} ${year}`;
      default:
        return 'No function for selected format';
    }
  }
}
