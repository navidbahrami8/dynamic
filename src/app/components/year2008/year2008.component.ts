import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-yers2008',
  templateUrl: './year2008.component.html',
  styleUrls: ['./year2008.component.css'],
})
export class YersComponent implements OnInit {
  carrentForm: FormGroup;
  constructor(
    private elementRef: ElementRef,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.carrentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      family: ['', []],
    });
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      data: this.carrentForm.value,
    });
  }
}
