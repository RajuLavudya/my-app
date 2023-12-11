import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructalDirectivesComponent } from './structal-directives.component';
import { FormsModule } from '@angular/forms';

describe('StructalDirectivesComponent', () => {
  let component: StructalDirectivesComponent;
  let fixture: ComponentFixture<StructalDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructalDirectivesComponent,FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructalDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
