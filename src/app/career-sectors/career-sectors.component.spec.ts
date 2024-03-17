import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSectorsComponent } from './career-sectors.component';

describe('CareerSectorsComponent', () => {
  let component: CareerSectorsComponent;
  let fixture: ComponentFixture<CareerSectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerSectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
