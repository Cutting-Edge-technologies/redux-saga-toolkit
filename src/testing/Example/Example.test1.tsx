import { act } from 'react-dom/test-utils';
import { Example } from './hoc';
import { exampleApiCommand, exampleCommand, exampleResetCommand } from './commands/example';
import { createAction } from '@reduxjs/toolkit';
import { createExampleHOCDecorator, rootExampleState } from './store/storeCreator';
import { HOC } from '../../types';
import { render } from '@testing-library/react';
import React from 'react';
export const setTeacherState = createAction<Partial<rootExampleState>>('setState');
export const resetTeacherState = createAction('resetState');

export const classSelector = (className: string) => {
  return `.${className}`;
};


export const renderExampleHOC = async (Hoc: HOC) => {
  const { HocDecorator, store } = createExampleHOCDecorator();
  const HocStoryToRender = HocDecorator(() => <Hoc />);
  const { container } = await render(HocStoryToRender);
  return { container, store };
};

// this test need jsdom to be envaeroment

describe('Test Example HOC', () => {
  test('it checks that defaults are shown in HOC', async () => {
    const { container } = await renderExampleHOC(Example);
    
    const messageElement = container.querySelector(classSelector('some class1'));
    const countElement = container.querySelector(classSelector('some class1'));

    expect(messageElement?.textContent).toBe('The message is ');
    expect(countElement?.textContent).toBe('The count is 0');
  });

  test('it checks that changes in the state are reflected in the components', async () => {
    const { container, store } = await renderExampleHOC(Example);
    
    await act(async () => {
      store.dispatch(setTeacherState({
        example: {
          message: 'Some generic message',
          count: 99,
        }
      }));
    });

    const messageElement = container.querySelector(classSelector('some class1'));
    const countElement = container.querySelector(classSelector('some class1'));

    expect(messageElement?.textContent).toBe('The message is Some generic message');
    expect(countElement?.textContent).toBe('The count is 99');
  });

  test('it checks that actions are dispatched on buttons click', async () => {
    const { container, store } = await renderExampleHOC(Example);

    const stringCommandButton = container.querySelector(classSelector('some class1'));
    expect(stringCommandButton).toBeTruthy();
    (stringCommandButton as HTMLButtonElement).click();
    expect(store.getActionHistory()[0].type).toBe(exampleCommand.action.type);

    const apiCommandButton = container.querySelector(classSelector('some class1'));
    expect(apiCommandButton).toBeTruthy();
    (apiCommandButton as HTMLButtonElement).click();
    expect(store.getActionHistory()[1].type).toBe(exampleApiCommand.action.type);

    const resetCommandButton = container.querySelector('some class1');
    expect(resetCommandButton).toBeTruthy();
    (resetCommandButton as HTMLButtonElement).click();
    expect(store.getActionHistory()[2].type).toBe(exampleResetCommand.action.type);
  });
});
