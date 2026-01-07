import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTAbuttonComponent } from './ctabutton.component';

describe('CTAbuttonComponent', () => {
  let component: CTAbuttonComponent;
  let fixture: ComponentFixture<CTAbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CTAbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTAbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
