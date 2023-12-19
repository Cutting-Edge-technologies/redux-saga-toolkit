import { TypedUseSelectorHook, useSelector } from "react-redux";
import { makeStoreCreator } from "../../utils";
import { rootSaga } from "../commands/rootSaga";
import { rootReducer } from "./rootReducer";
import { createHOCDecorator } from "../../../HOCDecorator";

export type rootExampleState = ReturnType<typeof rootReducer>;

export const exampleStoreCreator = makeStoreCreator(rootReducer, rootSaga);

export const useExampleSelector = useSelector as TypedUseSelectorHook<rootExampleState>;

export const createExampleHOCDecorator = () => createHOCDecorator(exampleStoreCreator);

