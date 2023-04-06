import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLFormComponent } from './htmlform.component';

describe('HTMLFormComponent', () => {
  let component: HTMLFormComponent;
  let fixture: ComponentFixture<HTMLFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTMLFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTMLFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
