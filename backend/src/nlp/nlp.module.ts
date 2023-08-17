import { Module } from '@nestjs/common';
import { NlpService } from './nlp.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [NlpService],
    exports: [NlpService]
})
export class NlpModule {}
