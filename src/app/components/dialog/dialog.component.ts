import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/interFace/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  name: any;
  family: any;
  tell: any;
  email: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.name = this.data.name;
    this.family = this.data.family;
    this.tell = this.data.tell;
    this.email = this.data.email;
  }
}
