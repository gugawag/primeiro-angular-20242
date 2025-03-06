import { TestBed } from '@angular/core/testing';

import { AlunoFireService } from './aluno-fire.service';

describe('AlunoFireService', () => {
  let service: AlunoFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
