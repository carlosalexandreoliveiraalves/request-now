import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalOrganizer } from './internal-organizer';

describe('InternalOrganizer', () => {
  let component: InternalOrganizer;
  let fixture: ComponentFixture<InternalOrganizer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalOrganizer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalOrganizer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
