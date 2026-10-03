import { Component, signal } from '@angular/core';
import { MilestoneTracker } from './milestone-tracker/milestone-tracker';
import { ProgressNotes } from './progress-notes/progress-notes';

@Component({
  imports: [MilestoneTracker, ProgressNotes],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project-progress-tracker');
}