import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSideNav } from './internal-side-nav';

describe('InternalSideNav', () => {
  let component: InternalSideNav;
  let fixture: ComponentFixture<InternalSideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalSideNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalSideNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
