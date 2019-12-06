export class Student {
  public firstName: string;
  public lastName: string;
  public programId: number;
  public programYear: number;
  public programCoop: boolean;
  public programInternship: boolean;
  public constructor() {
    this.firstName = '';
    this.lastName = '';
    this.programId = 0;
    this.programYear = 0;
    this.programCoop = false;
    this.programInternship = false;
  }
}
