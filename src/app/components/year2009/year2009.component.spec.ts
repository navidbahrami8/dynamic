import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YersComponent2009 } from './year2009.component';

describe('YersComponent', () => {
  let component: YersComponent2009;
  let fixture: ComponentFixture<YersComponent2009>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YersComponent2009 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YersComponent2009);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
