import { GenericSelector } from "../../../types";
import { rootExampleState } from "./storeCreator";

export type TeacherSelector<Result> = GenericSelector<rootExampleState, Result>;

export const selectCount: TeacherSelector<number> = (state) => state.example.count;
export const selectMessage: TeacherSelector<string> = (state) => state.example.message;
