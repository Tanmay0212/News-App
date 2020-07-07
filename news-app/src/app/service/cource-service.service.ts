import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../models/cource';
import { RouterModule, Routes , NavigationStart, NavigationEnd, Router, NavigationError, NavigationCancel, Event} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourceServiceService {

  constructor(private http : HttpClient) { }

  fetchAllCourses(){
    return this.http.get<CourseModel[]>("http://localhost:5057/admin/getAllCourseList");
  }
}
