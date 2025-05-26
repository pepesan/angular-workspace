import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepesanMyLibComponent } from './pepesan-my-lib.component';

describe('PepesanMyLibComponent', () => {
  let component: PepesanMyLibComponent;
  let fixture: ComponentFixture<PepesanMyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PepesanMyLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PepesanMyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
