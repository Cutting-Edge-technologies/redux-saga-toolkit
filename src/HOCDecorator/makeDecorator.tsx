import { StoryFn } from "@storybook/react";
import { Provider } from "react-redux";
import { ExtendedStore } from "../types";

export const makeDecorator = (store: ExtendedStore<any>) => {
  const HocDecorator = (Story: StoryFn<any>) => {
    return (
      <Provider store={store}>
        <Story />
        {/* <MyStoryButton
          onClick={() => console.log(teacherStore.getActionHistoryRepresentation())}
          variant={'contained'}
          color='error'
        >
          Action history
        </MyStoryButton> */}
      </Provider>
    );
  };
  return HocDecorator;
};