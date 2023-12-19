import { Meta } from '@storybook/react';
import { Example } from './hoc';
import { createTeacherHOCDecorator } from '../../../teacher/hoc/TeacherStateDecorator';
import { createExampleHOCDecorator } from './store/storeCreator';

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
