import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCardContainerComponent } from './full-card-container.component';

describe('FullCardContainerComponent', () => {
  let component: FullCardContainerComponent;
  let fixture: ComponentFixture<FullCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
