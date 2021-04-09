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
  dynamicData : any[] = [];
  // dynamicComponent
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  container: ViewContainerRef;
  years: year[] = [
    { value: '2008', viewValue: '2008' },
    { value: '2009', viewValue: '2009' },
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
      dynamic: new FormArray([]),
    });
  }

  //dynamic array
  get childDynamic() {
    return this.myform.get('dynamic') as FormArray;
  }

  addchildDynamic() {
    let jsonArray = this.dynamicData;
    this.childDynamic.push(this.fb.group(jsonArray));
  }

  //get service for 2008
  getD2008() {
    this.Dd2008.getData().subscribe((data) => {
      this.dynamicData = data;
      console.log(this.dynamicData, ' data ');
    });
  }
    //get service for 2009
    getD2009() {
      this.Dd2009.getData().subscribe((data) => {
        this.dynamicData = data;
        console.log(this.dynamicData, ' data ');
      });
    }
  //creat dynamic component
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
  }
}
