import { Test, TestingModule } from '@nestjs/testing';
import { CommetResolver } from './commet.resolver';
import { CommetService } from './commet.service';

describe('CommetResolver', () => {
  let resolver: CommetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommetResolver, CommetService],
    }).compile();

    resolver = module.get<CommetResolver>(CommetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
