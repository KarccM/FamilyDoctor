"use strict";
// import { Condition as ConditionObject } from "src/conditions/conditions.schema";
// import { ConditionType } from "src/shared/Utils/constants/enums";
// import { Symptom } from "./symptom";
// import { MedicalCondition } from "./medical-condition";
// import { PatientInfo } from "./patient-info";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
var Condition = /** @class */ (function () {
    function Condition(name, question, values) {
        this.name = name;
        this.question = question;
        this.values = values;
    }
    Condition.prototype.toString = function () {
        return "[Condition]\n\tname: ".concat(this.name, "\n");
    };
    return Condition;
}());
exports.Condition = Condition;
