export class Formatter {
  static notLongSpaces(string: string) {
    return string.replace(/\s{2,}/g, " ").toString();
  }
}
