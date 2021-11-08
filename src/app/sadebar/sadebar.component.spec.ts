import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadebarComponent } from './sadebar.component';

describe('SadebarComponent', () => {
  let component: SadebarComponent;
  let fixture: ComponentFixture<SadebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SadebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
