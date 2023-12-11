import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FliplortComponent } from './fliplort.component';

describe('FliplortComponent', () => {
  let component: FliplortComponent;
  let fixture: ComponentFixture<FliplortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FliplortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FliplortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
