import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgrsComponent } from './ggrs.component';

describe('GgrsComponent', () => {
  let component: GgrsComponent;
  let fixture: ComponentFixture<GgrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GgrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
