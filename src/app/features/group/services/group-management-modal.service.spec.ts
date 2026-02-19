import { TestBed } from '@angular/core/testing';

import { GroupManagementModalService } from './group-management-modal.service';

describe('GroupManagementModalService', () => {
  let service: GroupManagementModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupManagementModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
