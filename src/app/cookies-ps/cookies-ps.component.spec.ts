import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesPsComponent } from './cookies-ps.component';

describe('CookiesPsComponent', () => {
  let component: CookiesPsComponent;
  let fixture: ComponentFixture<CookiesPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesPsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookiesPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
