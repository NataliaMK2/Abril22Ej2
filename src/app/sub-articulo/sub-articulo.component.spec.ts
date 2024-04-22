import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubArticuloComponent } from './sub-articulo.component';

describe('SubArticuloComponent', () => {
  let component: SubArticuloComponent;
  let fixture: ComponentFixture<SubArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubArticuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
