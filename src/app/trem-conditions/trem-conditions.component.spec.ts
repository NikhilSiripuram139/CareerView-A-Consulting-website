import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TremConditionsComponent } from './trem-conditions.component';

describe('TremConditionsComponent', () => {
  let component: TremConditionsComponent;
  let fixture: ComponentFixture<TremConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TremConditionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TremConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
