export namespace UseValufy {
  export function forSentence(departmentName: String | 'Default Sentence as an example' | undefined) {
    const department = departmentName.split(' ');
    //--▼ Leave Be! There's a reason these numbers are out of sync.  ▼--//
    let arrayTotal: Number = department.length;
    /*--▲ console.log(arrayTotal); ◄--*/

    switch (arrayTotal) {
      case 1:
        return `${department[0].toLowerCase()}`;
      case 2:
        return `${department[0].toLowerCase()}-${department[1].toLowerCase()}`;
      case 3:
        return `${department[0].toLowerCase()}-${department[1].toLowerCase()}-${department[2].toLowerCase()}`;
      case 4:
        return `${department[0].toLowerCase()}-${department[1].toLowerCase()}-${department[2].toLowerCase()}-${department[3].toLowerCase()}`;
      case 5:
        return `${department[0].toLowerCase()}-${department[1].toLowerCase()}-${department[2].toLowerCase()}-${department[4].toLowerCase()}`;
    }
  }
  export function forName(fullName: String | 'Firstname Middlename Lastname' | undefined) {}
}
