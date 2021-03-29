import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { YersComponent } from './components/year2008/year2008.component';
import { YersComponent2009 } from './components/year2009/year2009.component';
import { year } from './shared/interFace/year';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamicProject';
  // dynamic
  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  container: ViewContainerRef;
  years: year[] = [
    { value: '2008', viewValue: '2008' },
    { value: '2009', viewValue: '2009' },
  ];
  constructor(private comFacResolver: ComponentFactoryResolver) {}

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
