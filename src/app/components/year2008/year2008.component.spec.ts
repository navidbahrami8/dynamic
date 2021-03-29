import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YersComponent } from './year2008.component';

describe('YersComponent', () => {
  let component: YersComponent;
  let fixture: ComponentFixture<YersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
