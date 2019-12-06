import {Student} from './student';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  public student = new Student();
}
