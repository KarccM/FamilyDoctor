import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios';
// import { AutoTokenizer, AutoModel } from '@xenovayarn /transformers'
@Injectable()
export class NlpService {
    constructor(private readonly httpService: HttpService){}

    async hello(){
        let res = await this.httpService.axiosRef.get(process.env.NLP_BACKEND)
        return res.data
    }

    async process_answer(answer, labels){
        let res = await this.httpService.axiosRef.post(process.env.NLP_BACKEND, {answer: answer, labels: labels})
        return res.data
    }
}

// const { AutoTokenizer, AutoModel } = require('transformers');

// async function findMostSimilarLabel(inputString, labelArray, modelName = 'sentence-transformers/paraphrase-MiniLM-L6-v2') {
//     // Load a pre-trained tokenizer and model
//     const tokenizer = await AutoTokenizer.from_pretrained(modelName);
//     const model = await AutoModel.from_pretrained(modelName);

//     // Tokenize input string and labels
//     const inputTokens = await tokenizer.encode(inputString, { addSpecialTokens: true });
//     const labelTokens = await Promise.all(labelArray.map(label => tokenizer.encode(label, { addSpecialTokens: true })));

//     // Convert tokens to tensors
//     const inputTensor = model.config.use_pt ? torch.tensor(inputTokens).unsqueeze(0) : tf.tensor([inputTokens]);
//     const labelTensors = labelTokens.map(tokens => model.config.use_pt ? torch.tensor(tokens).unsqueeze(0) : tf.tensor([tokens]));

//     // Get embeddings
//     const inputEmbedding = await model(inputTensor).lastHiddenState.mean(1); // You might need to adjust this based on the model's architecture
//     const labelEmbeddings = await Promise.all(labelTensors.map(async tensor => (await model(tensor).lastHiddenState.mean(1))));

//     // Calculate cosine similarities between input embedding and label embeddings
//     const similarities = labelEmbeddings.map(embedding => cosineSimilarity(inputEmbedding, embedding));

//     // Find the most similar label
//     const mostSimilarIndex = similarities.indexOf(Math.max(...similarities));
//     const mostSimilarLabel = labelArray[mostSimilarIndex];

//     return mostSimilarLabel;
// }

// // Cosine similarity function
// function cosineSimilarity(a, b) {
//     const dotProduct = a.dot(b);
//     const normA = a.norm();
//     const normB = b.norm();
//     return dotProduct.div(normA.mul(normB)).item();
// }

// // Example usage
// const inputString = "مرحبًا بك في عالم معالجة اللغة الطبيعية";
// const labelArray = ["تحليل النصوص", "الترجمة الآلية", "استخراج المعلومات", "توليد النصوص"];

// findMostSimilarLabel(inputString, labelArray)
//     .then(mostSimilarLabel => {
//         console.log("Most similar label:", mostSimilarLabel);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
