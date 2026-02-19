import { TestBed } from '@angular/core/testing';

import { GroupInviteModalService } from './group-invite-modal.service';

describe('GroupInviteModalService', () => {
  let service: GroupInviteModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupInviteModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
