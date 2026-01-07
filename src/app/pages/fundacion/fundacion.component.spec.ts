import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionComponent } from './fundacion.component';

describe('FundacionComponent', () => {
  let component: FundacionComponent;
  let fixture: ComponentFixture<FundacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
