import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdtCmsComponent } from './vdt-cms.component';

describe('VdtCmsComponent', () => {
  let component: VdtCmsComponent;
  let fixture: ComponentFixture<VdtCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VdtCmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VdtCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
