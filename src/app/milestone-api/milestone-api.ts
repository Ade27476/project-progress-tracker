import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { Observable } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MilestoneService, Milestone } from '../milestone';

@Component({
  selector: 'app-milestone-api',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './milestone-api.html',
  styleUrl: './milestone-api.css'
})
export class MilestoneApi implements OnInit {
  milestones$!: Observable<Milestone[]>;

  milestoneForm = new FormGroup({
    name: new FormControl(''),
    status: new FormControl('Not Started')
  });

  message = signal('');

  constructor(private milestoneService: MilestoneService) {}

  ngOnInit(): void {
    this.loadMilestones();
  }

  loadMilestones(): void {
    this.milestones$ = this.milestoneService.getMilestones();
  }

  onSubmit(): void {
    const name = this.milestoneForm.controls.name.value ?? '';
    const status = this.milestoneForm.controls.status.value ?? '';

    this.message.set('');

    this.milestoneService.addMilestone(name, status).subscribe({
      next: (response) => {
        this.message.set(response.message);
        console.log('Server response:', response);
      },
      error: (error) => {
        this.message.set('Unable to submit milestone.');
        console.error('POST request failed:', error);
      }
    });
  }
}