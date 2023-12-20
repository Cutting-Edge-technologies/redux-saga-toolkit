import { StoryFn } from "@storybook/react";
import { ExtendedStore } from "../types";
import * as React from 'react';
export declare const makeDecorator: (store: ExtendedStore<any>) => (Story: StoryFn<any>) => React.JSX.Element;
