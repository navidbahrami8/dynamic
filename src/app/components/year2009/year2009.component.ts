import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-yers2009',
  templateUrl: './year2009.component.html',
  styleUrls: ['./year2009.component.css']
})
export class YersComponent2009 implements OnInit {
  carrentForm: FormGroup;
  constructor(private elementRef: ElementRef,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.carrentForm = this.formBuilder.group({
      tell: ['',  [Validators.min(1000000), Validators.max(5000000)]],
      email: ['',[Validators.required, Validators.email]],
    });
  }
  openDialog() {
    this.carrentForm.markAllAsTouched();
    if (this.carrentForm.invalid){
      return
    }
    this.dialog.open(DialogComponent, {
      data: this.carrentForm.value,
    });
  }
}
