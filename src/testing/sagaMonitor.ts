import {SagaMonitor} from 'redux-saga';
import { Action } from 'redux'

export class StoreSagaMonitor implements SagaMonitor {
  constructor(private historyArray: any[]) {
    
  }

  protected effectTypesToWatch: Set<string> = new Set(['PUT', 'CALL']); 

  effectTriggered(options: { effectId: number; parentEffectId: number; label?: string; effect: any }) {
    const isEffectTheOneToWatch = this.effectTypesToWatch.has(options.effect?.type);
    if (isEffectTheOneToWatch) {
      this.historyArray.push(options);
    };
  }

  actionDispatched(action: Action) {
    this.historyArray.push(action);
  }
}

export class StoreLogSagaMonitor extends StoreSagaMonitor {
  effectTriggered(options: { effectId: number; parentEffectId: number; label?: string | undefined; effect: any; }): void {
    super.effectTriggered(options);
    const isEffectMatch =  this.effectTypesToWatch.has(options.effect?.type);
    if (isEffectMatch) {
      console.log(options.effect);
    }
  }

  actionDispatched(action: Action<any>): void {
    super.actionDispatched(action);
    console.log(JSON.stringify(action, undefined, 2));
  }
}