import { Meta } from '@storybook/react';
import { Example } from './hoc';
import { createExampleHOCDecorator } from './store/storeCreator';
import React from 'react';

const { HocDecorator, useSetTestState: useSetExampleState } = createExampleHOCDecorator();

export default {
  title: 'HOC/Example',
  decorators: [HocDecorator],
} as Meta;

export const ExamplePageStory = () => {
  return (
    <Example />
  );
}

export const ExampleDataStory = () => {

  useSetExampleState({
    example: {
      count: 999,
      message: 'Some message',
    }
  });

  return (
    <Example />
  );
}
