import { TestBed } from '@angular/core/testing';

import { GroupModalService } from './group-modal.service';

describe('GroupModalService', () => {
  let service: GroupModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
