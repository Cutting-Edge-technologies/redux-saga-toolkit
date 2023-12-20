export class StoreSagaMonitor {
    constructor(historyArray) {
        this.historyArray = historyArray;
        this.effectTypesToWatch = new Set(['PUT', 'CALL']);
    }
    effectTriggered(options) {
        const isEffectTheOneToWatch = this.effectTypesToWatch.has(options.effect?.type);
        if (isEffectTheOneToWatch) {
            this.historyArray.push(options);
        }
        ;
    }
    actionDispatched(action) {
        this.historyArray.push(action);
    }
}
export class StoreLogSagaMonitor extends StoreSagaMonitor {
    effectTriggered(options) {
        super.effectTriggered(options);
        const isEffectMatch = this.effectTypesToWatch.has(options.effect?.type);
        if (isEffectMatch) {
            console.log(options.effect);
        }
    }
    actionDispatched(action) {
        super.actionDispatched(action);
        console.log(JSON.stringify(action, undefined, 2));
    }
}
//# sourceMappingURL=sagaMonitor.js.map