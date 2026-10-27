import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Milestone {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {
  private apiUrl = 'http://localhost:8000/milestones';

  constructor(private http: HttpClient) {}

  getMilestones(): Observable<Milestone[]> {
    return this.http.get<Milestone[]>(this.apiUrl);
  }

  addMilestone(
    name: string,
    status: string
  ): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      this.apiUrl,
      { name, status }
    );
  }
}