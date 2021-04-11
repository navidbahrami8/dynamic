import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { YersComponent } from './components/year2008/year2008.component';
import { YersComponent2009 } from './components/year2009/year2009.component';
import { Dynamic } from './shared/interFace/dynamic';
import { year } from './shared/interFace/year';
import { Dynamic2008Service } from './shared/services/dynamic2008.service';
import { Dynamic2009Service } from './shared/services/dynamic2009.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dynamicProject';
  myform: FormGroup;
  // dynamicForm
  dynamicData: Dynamic;
  // dynamicComponent
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  container: ViewContainerRef;

  years: year[] = [
    { value: '2008', viewValue: '2008component' },
    { value: '2009', viewValue: '2009component' },
    { value: '2008form', viewValue: '2008form' },
    { value: '2009form', viewValue: '2009form' },
  ];

  constructor(
    private comFacResolver: ComponentFactoryResolver,
    private Dd2008: Dynamic2008Service,
    private Dd2009: Dynamic2009Service,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // this.getD2008();
    this.initform();
    console.log(this.dynamicData, 'data');
  }

  initform() {
    this.myform = this.fb.group({
      dynamic: this.fb.array([]),
    });
  }

  //dynamic array
  get childDynamic() {
    return this.myform.get('dynamic') as FormArray;
  }

  addchildDynamic() {
    this.childDynamic.push(this.fb.group(this.dynamicData));
  }

  //create dynamic component
  assignComponent(component) {
    if (component.value == 2008) {
      let comp = this.comFacResolver.resolveComponentFactory(YersComponent);
      let dynamicComp = this.container.createComponent(comp);
      return dynamicComp;
    }
    if (component.value == 2009) {
      let comp = this.comFacResolver.resolveComponentFactory(YersComponent2009);
      let dynamicComp = this.container.createComponent(comp);
      return dynamicComp;
    }
    //get service for 2008form
    if (component.value == '2008form') {
      this.Dd2008.getData().subscribe((data) => {
        this.dynamicData = data;
      });
    }
    //get service for 2009form
    if (component.value == '2009form') {
      this.Dd2009.getData().subscribe((data) => {
        this.dynamicData = data;
      });
    }
  }
}
