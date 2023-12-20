[redux-saga-toolkit](../README.md) / ExtendedStore

# Interface: ExtendedStore\<State\>

## Type parameters

| Name |
| :------ |
| `State` |

## Hierarchy

- `Store`\<`State`\>

  ↳ **`ExtendedStore`**

## Table of contents

### Properties

- [asyncDispatch](ExtendedStore.md#asyncdispatch)
- [dispatch](ExtendedStore.md#dispatch)
- [getActionHistory](ExtendedStore.md#getactionhistory)
- [getActionHistoryRepresentation](ExtendedStore.md#getactionhistoryrepresentation)

### Methods

- [[observable]](ExtendedStore.md#[observable])
- [getState](ExtendedStore.md#getstate)
- [replaceReducer](ExtendedStore.md#replacereducer)
- [subscribe](ExtendedStore.md#subscribe)

## Properties

### asyncDispatch

• **asyncDispatch**: (`action`: `Action`) => `Promise`\<`unknown`\>

#### Type declaration

▸ (`action`): `Promise`\<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `Action` |

##### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/types/index.ts:10](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/types/index.ts#L10)

___

### dispatch

• **dispatch**: `Dispatch`\<`UnknownAction`\>

Dispatches an action. It is the only way to trigger a state change.

The `reducer` function, used to create the store, will be called with the
current state tree and the given `action`. Its return value will be
considered the **next** state of the tree, and the change listeners will
be notified.

The base implementation only supports plain object actions. If you want
to dispatch a Promise, an Observable, a thunk, or something else, you
need to wrap your store creating function into the corresponding
middleware. For example, see the documentation for the `redux-thunk`
package. Even the middleware will eventually dispatch plain object
actions using this method.

**`Param`**

A plain object representing “what changed”. It is a good
  idea to keep actions serializable so you can record and replay user
  sessions, or use the time travelling `redux-devtools`. An action must
  have a `type` property which may not be `undefined`. It is a good idea
  to use string constants for action types.

#### Inherited from

Store.dispatch

#### Defined in

node_modules/redux/dist/redux.d.ts:235

___

### getActionHistory

• **getActionHistory**: () => `Action`\<`any`\>[]

#### Type declaration

▸ (): `Action`\<`any`\>[]

##### Returns

`Action`\<`any`\>[]

#### Defined in

[src/types/index.ts:11](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/types/index.ts#L11)

___

### getActionHistoryRepresentation

• **getActionHistoryRepresentation**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[src/types/index.ts:12](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/types/index.ts#L12)

## Methods

### [observable]

▸ **[observable]**(): `Observable`\<`State` & {}\>

Interoperability point for observable/reactive libraries.

#### Returns

`Observable`\<`State` & {}\>

A minimal observable of state changes.
For more information, see the observable proposal:
https://github.com/tc39/proposal-observable

#### Inherited from

Store.[observable]

#### Defined in

node_modules/redux/dist/redux.d.ts:283

___

### getState

▸ **getState**(): `State` & {}

Reads the state tree managed by the store.

#### Returns

`State` & {}

The current state tree of your application.

#### Inherited from

Store.getState

#### Defined in

node_modules/redux/dist/redux.d.ts:241

___

### replaceReducer

▸ **replaceReducer**(`nextReducer`): `void`

Replaces the reducer currently used by the store to calculate the state.

You might need this if your app implements code splitting and you want to
load some of the reducers dynamically. You might also need this if you
implement a hot reloading mechanism for Redux.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nextReducer` | `Reducer`\<`State`, `UnknownAction`, `State`\> | The reducer for the store to use instead. |

#### Returns

`void`

#### Inherited from

Store.replaceReducer

#### Defined in

node_modules/redux/dist/redux.d.ts:276

___

### subscribe

▸ **subscribe**(`listener`): `Unsubscribe`

Adds a change listener. It will be called any time an action is
dispatched, and some part of the state tree may potentially have changed.
You may then call `getState()` to read the current state tree inside the
callback.

You may call `dispatch()` from a change listener, with the following
caveats:

1. The subscriptions are snapshotted just before every `dispatch()` call.
If you subscribe or unsubscribe while the listeners are being invoked,
this will not have any effect on the `dispatch()` that is currently in
progress. However, the next `dispatch()` call, whether nested or not,
will use a more recent snapshot of the subscription list.

2. The listener should not expect to see all states changes, as the state
might have been updated multiple times during a nested `dispatch()` before
the listener is called. It is, however, guaranteed that all subscribers
registered before the `dispatch()` started will be called with the latest
state by the time it exits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | `ListenerCallback` | A callback to be invoked on every dispatch. |

#### Returns

`Unsubscribe`

A function to remove this change listener.

#### Inherited from

Store.subscribe

#### Defined in

node_modules/redux/dist/redux.d.ts:266
