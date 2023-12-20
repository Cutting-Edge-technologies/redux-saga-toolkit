import { useDispatch } from "react-redux";
import { exampleCommand, exampleApiCommand, exampleResetCommand } from "../commands/example";
import { useExampleSelector } from "../store/storeCreator";
import { HOC } from "../../../types";
import React from "react";

export const Example: HOC = () => {
  const dispatch = useDispatch();
  const message = useExampleSelector((state) => state.example.message);
  const count = useExampleSelector((state) => state.example.count);
  return (
    <div className="container">
      <div className="message">
        <p className="content">
          {message}
        </p>
      </div>
      <div className="count">
        <p className="content">
          {count}
        </p>
      </div>
      <button
        className="command"
        onClick={() => dispatch(exampleCommand.action('Test message'))}
      >
        Call string command
      </button>
      <button
        className="command"
        onClick={() => dispatch(exampleApiCommand.action(42))}
      >
        Call number command
      </button>
      <button
        className="command"
        onClick={() => dispatch(exampleResetCommand.action())}
      >
        Call reset command
      </button>
    </div>
  )
}
