export namespace UseCapify {
  export function forValue(value: String | 'firstname-middlename-lastname' | undefined) {
    let firstSplit: String = value.split('-')[0];
    let firstName: String = `${firstSplit.charAt(0).toUpperCase() + firstSplit.slice(1)}`;

    let lastSplit: String = value.split('-')[1];
    let lastName: String = `${lastSplit.charAt(0).toUpperCase() + lastSplit.slice(1)}`;

    return `${firstName} ${lastName}`;
  }
}
