import { TestBed } from '@angular/core/testing';

import { VertexService } from './vertex.service';

describe('VertexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VertexService = TestBed.get(VertexService);
    expect(service).toBeTruthy();
  });
});
