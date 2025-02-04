import { TestBed } from '@angular/core/testing';

import { AlunoRestService } from './aluno-rest.service';

describe('AlunoRestService', () => {
  let service: AlunoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
