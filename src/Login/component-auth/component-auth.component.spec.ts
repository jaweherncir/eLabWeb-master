import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAuthComponent } from './component-auth.component';

describe('ComponentAuthComponent', () => {
  let component: ComponentAuthComponent;
  let fixture: ComponentFixture<ComponentAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
