import { Component } from '@angular/core';
import {Student} from '../student';
import {StudentDataService} from '../student-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  title = 'Output';
  public programNames = [
    '-- select program --',
    'Computer Programmer', 'Systems Technology',
    'Engineering Technician', 'Systems Technician'];
  public student: Student;
  public constructor(dataService: StudentDataService) {
    this.student = dataService.student;
  }
}
