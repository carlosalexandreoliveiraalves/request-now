import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMembersCard } from './group-members-card';

describe('GroupMembersCard', () => {
  let component: GroupMembersCard;
  let fixture: ComponentFixture<GroupMembersCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupMembersCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMembersCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
