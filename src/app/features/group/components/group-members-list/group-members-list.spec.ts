import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMembersList } from './group-members-list';

describe('GroupMembersList', () => {
  let component: GroupMembersList;
  let fixture: ComponentFixture<GroupMembersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupMembersList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupMembersList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
