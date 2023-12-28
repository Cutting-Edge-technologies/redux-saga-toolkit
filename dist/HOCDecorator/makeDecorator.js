import { Provider } from "react-redux";
import * as React from 'react';
export const makeDecorator = (store) => {
    const HocDecorator = (Story) => {
        return (React.createElement(Provider, { store: store },
            React.createElement(Story, null)));
    };
    return HocDecorator;
};
//# sourceMappingURL=makeDecorator.js.map