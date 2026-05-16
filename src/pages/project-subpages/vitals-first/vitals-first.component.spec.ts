import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalsFirstComponent } from './vitals-first.component';

describe('VitalsFirstComponent', () => {
  let component: VitalsFirstComponent;
  let fixture: ComponentFixture<VitalsFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalsFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitalsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
