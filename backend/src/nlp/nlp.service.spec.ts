import { Test, TestingModule } from '@nestjs/testing';
import { NlpService } from './nlp.service';

describe('NlpService', () => {
  let service: NlpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NlpService],
    }).compile();

    service = module.get<NlpService>(NlpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
