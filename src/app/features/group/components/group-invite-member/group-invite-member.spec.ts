import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupInviteMember } from './group-invite-member';

describe('GroupInviteMember', () => {
  let component: GroupInviteMember;
  let fixture: ComponentFixture<GroupInviteMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupInviteMember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupInviteMember);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
