import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPublicacionesComponent } from './card-publicaciones.component';

describe('CardPublicacionesComponent', () => {
  let component: CardPublicacionesComponent;
  let fixture: ComponentFixture<CardPublicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPublicacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
