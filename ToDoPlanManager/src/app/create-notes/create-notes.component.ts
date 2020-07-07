import { Component, OnInit } from '@angular/core';
import { NoteModel } from '../../model';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss'],
})
export class CreateNotesComponent implements OnInit {
  noteModel: NoteModel;

  constructor() {}

  ngOnInit(): void {}
}
