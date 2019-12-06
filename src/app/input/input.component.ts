import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentDataService} from '../student-data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public title = 'Input';
  public programNames = [
    '-- select program --',
    'Computer Programmer', 'Systems Technology',
    'Engineering Technician', 'Systems Technician'];
  public form: FormGroup;
  public student: Student;
  private router: Router;
  public constructor(dataService: StudentDataService, router: Router) {
    this.student = dataService.student;
    this.router = router;
  }

  public send(data) {
    this.student.firstName = data.firstName;
    this.student.lastName = data.lastName;
    this.student.programId = data.programId;
    this.student.programYear = data.programYear;
    this.student.programCoop = data.programCoop;
    this.student.programInternship = data.programInternship;
    this.router.navigate(['output']).then(() => {
      console.log('showing the output data');
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      programId: new FormControl(0, this.programIdValidator),
      programYear: new FormControl(0, this.yearValidator),
      programCoop: new FormControl(false),
      programInternship: new FormControl(false)
    });
  }

  public yearValidator(control: FormControl) {
    if (control.value > 0) {
      return null;
    } else {
      return {programYear: true};
    }
  }
  public programIdValidator(control: FormControl) {
    if (control.value > 0) {
      return null;
    } else {
      return {programId: true};
    }
  }
}
