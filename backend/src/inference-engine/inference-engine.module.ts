import { Module } from "@nestjs/common";
import { SharedModule } from "src/shared/shared.module";
import { InferenceEngineService } from "./inference-engine.service";
import { ConditionsModule } from "src/conditions/conditions.module";
import { ConclusionModule } from "src/conclusion/conclusion.module";

@Module({
    imports: [
        SharedModule,
        ConditionsModule,
        ConclusionModule
    ],
    providers:[InferenceEngineService],
})
export class InferenceEngine {}