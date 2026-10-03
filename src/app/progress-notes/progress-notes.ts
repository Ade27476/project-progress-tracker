import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html',
})
export class ProgressNotes {
  progressNotesForm = new FormGroup({
    projectName: new FormControl(''),
    date: new FormControl(''),
    currentStatus: new FormControl('On Track'),
    teamMember: new FormControl(''),
    progressNote: new FormControl('')
  });
}