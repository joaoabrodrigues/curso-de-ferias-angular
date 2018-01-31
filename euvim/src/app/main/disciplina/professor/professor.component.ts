import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { ProfessorService } from '../professor.service';

@Component({
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  public professores = [];

  constructor(public dialogRef: MatDialogRef<ProfessorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _professorService: ProfessorService) { }

  ngOnInit() {
    console.log(this.data);
    this.data.professores.forEach(id => {
      this._professorService.getOne(id).subscribe(suc => {
        this.professores.push(suc);
      });
    });
  }

}
