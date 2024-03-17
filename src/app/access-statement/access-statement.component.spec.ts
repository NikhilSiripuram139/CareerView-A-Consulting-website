import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessStatementComponent } from './access-statement.component';

describe('AccessStatementComponent', () => {
  let component: AccessStatementComponent;
  let fixture: ComponentFixture<AccessStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
