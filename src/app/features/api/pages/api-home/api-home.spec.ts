import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHome } from './api-home';

describe('ApiHome', () => {
  let component: ApiHome;
  let fixture: ComponentFixture<ApiHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
