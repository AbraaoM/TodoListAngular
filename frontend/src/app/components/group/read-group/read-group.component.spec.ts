import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGroupComponent } from './read-group.component';

describe('ReadGroupComponent', () => {
  let component: ReadGroupComponent;
  let fixture: ComponentFixture<ReadGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
