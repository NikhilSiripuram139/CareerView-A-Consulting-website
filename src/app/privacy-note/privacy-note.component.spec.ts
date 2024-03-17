import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyNoteComponent } from './privacy-note.component';

describe('PrivacyNoteComponent', () => {
  let component: PrivacyNoteComponent;
  let fixture: ComponentFixture<PrivacyNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
