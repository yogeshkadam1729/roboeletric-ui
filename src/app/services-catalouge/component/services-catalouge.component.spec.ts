import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCatalougeComponent } from './services-catalouge.component';

describe('ServicesCatalougeComponent', () => {
  let component: ServicesCatalougeComponent;
  let fixture: ComponentFixture<ServicesCatalougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesCatalougeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
