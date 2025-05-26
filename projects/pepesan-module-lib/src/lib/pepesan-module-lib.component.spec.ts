import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepesanModuleLibComponent } from './pepesan-module-lib.component';

describe('PepesanModuleLibComponent', () => {
  let component: PepesanModuleLibComponent;
  let fixture: ComponentFixture<PepesanModuleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PepesanModuleLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PepesanModuleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
