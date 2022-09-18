import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceTestComponent } from './face-test.component';

describe('FaceTestComponent', () => {
  let component: FaceTestComponent;
  let fixture: ComponentFixture<FaceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
