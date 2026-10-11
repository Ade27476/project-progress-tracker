import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html',
})
export class ProgressNotes {
  progressNotesForm = new FormGroup({
    projectCode: new FormControl(''),
    projectName: new FormControl(''),
    date: new FormControl(''),
    currentStatus: new FormControl('On Track'),
    teamMember: new FormControl(''),
    progressNote: new FormControl('')
  });

  practiceNote = 'Initial progress note';
  projectCodeMessage = '';

  onProjectCodeBlur() {
    const code = (
      this.progressNotesForm.controls.projectCode.value ?? ''
    ).trim().toUpperCase();

    const projectNames: Record<string, string> = {
      PPT101: 'Project Progress Tracker',
      WEB202: 'Website Redesign',
      APP303: 'Mobile Application Development',
      DATA404: 'Data Analytics Dashboard'
    };

    const projectName = projectNames[code] ?? '';

    this.progressNotesForm.controls.projectName.setValue(projectName);

    if (code !== '' && projectName === '') {
      this.projectCodeMessage = 'Project code not found.';
    } else {
      this.projectCodeMessage = '';
    }
  }
}