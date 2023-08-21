import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
// import { AutoTokenizer, AutoModel } from '@xenovayarn /transformers'
@Injectable()
export class NlpService {
  constructor(private readonly httpService: HttpService) {}

  async hello() {
    let res = await this.httpService.axiosRef.get(process.env.NLP_BACKEND);
    return res.data;
  }

  async process_answer(answer, labels) {
    let res = await this.httpService.axiosRef.post(process.env.NLP_BACKEND, {
      answer: answer,
      labels: labels,
    });
    return res.data;
  }
}
