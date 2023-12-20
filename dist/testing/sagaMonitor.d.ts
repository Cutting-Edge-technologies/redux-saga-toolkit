import { SagaMonitor } from 'redux-saga';
import { Action } from 'redux';
export declare class StoreSagaMonitor implements SagaMonitor {
    private historyArray;
    constructor(historyArray: any[]);
    protected effectTypesToWatch: Set<string>;
    effectTriggered(options: {
        effectId: number;
        parentEffectId: number;
        label?: string;
        effect: any;
    }): void;
    actionDispatched(action: Action): void;
}
export declare class StoreLogSagaMonitor extends StoreSagaMonitor {
    effectTriggered(options: {
        effectId: number;
        parentEffectId: number;
        label?: string | undefined;
        effect: any;
    }): void;
    actionDispatched(action: Action<any>): void;
}
