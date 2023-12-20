redux-saga-toolkit

# redux-saga-toolkit

## Table of contents

### Interfaces

- [ExtendedStore](interfaces/ExtendedStore.md)

### Type Aliases

- [ArgumentSelector](README.md#argumentselector)
- [GenericSelector](README.md#genericselector)
- [HOC](README.md#hoc)
- [commonState](README.md#commonstate)

### Variables

- [errorSlice](README.md#errorslice)
- [loadingSlice](README.md#loadingslice)

### Functions

- [commonReducer](README.md#commonreducer)
- [createCommand](README.md#createcommand)
- [createHOCDecorator](README.md#createhocdecorator)
- [makeStoreCreator](README.md#makestorecreator)
- [takeLatestCommandSafe](README.md#takelatestcommandsafe)
- [takeLatestSafe](README.md#takelatestsafe)
- [watchCommandChapter](README.md#watchcommandchapter)

## Type Aliases

### ArgumentSelector

Ƭ **ArgumentSelector**\<`Selector`\>: (...`args`: `any`[]) => `Selector`

#### Type parameters

| Name |
| :------ |
| `Selector` |

#### Type declaration

▸ (`...args`): `Selector`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Selector`

#### Defined in

[src/types/index.ts:16](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/types/index.ts#L16)

___

### GenericSelector

Ƭ **GenericSelector**\<`State`, `Result`\>: (`state`: `State`) => `Result`

#### Type parameters

| Name |
| :------ |
| `State` |
| `Result` |

#### Type declaration

▸ (`state`): `Result`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `State` |

##### Returns

`Result`

#### Defined in

[src/types/index.ts:15](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/types/index.ts#L15)

___

### HOC

Ƭ **HOC**: `FC`\<{}\>

#### Defined in

[src/types/index.ts:5](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/types/index.ts#L5)

___

### commonState

Ƭ **commonState**: `ReturnType`\<typeof [`commonReducer`](README.md#commonreducer)\>

#### Defined in

[src/state/commonReducer.ts:10](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/state/commonReducer.ts#L10)

## Variables

### errorSlice

• `Const` **errorSlice**: `Slice`\<`errorState`, \{ `clearError`: (`state`: `errorState`, `__namedParameters`: \{ `payload`: `string` ; `type`: `string`  }) => {} ; `resetErrors`: () => {} ; `setError`: (`state`: `errorState`, `__namedParameters`: \{ `payload`: `IErrorDetailsPayload` ; `type`: `string`  }) => {}  }, ``"errorSlice"``, ``"errorSlice"``, `SliceSelectors`\<`errorState`\>\>

#### Defined in

[src/state/errorSlice.ts:16](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/state/errorSlice.ts#L16)

___

### loadingSlice

• `Const` **loadingSlice**: `Slice`\<`loadingState`, \{ `resetLoading`: () => {} ; `setLoading`: (`state`: `loadingState`, `__namedParameters`: \{ `payload`: `string` ; `type`: `string`  }) => {} ; `unsetLoading`: (`state`: `loadingState`, `__namedParameters`: \{ `payload`: `string` ; `type`: `string`  }) => {}  }, ``"loadingSlice"``, ``"loadingSlice"``, `SliceSelectors`\<`loadingState`\>\>

#### Defined in

[src/state/loadingSlice.ts:6](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/state/loadingSlice.ts#L6)

## Functions

### commonReducer

▸ **commonReducer**(`state`, `action`): `Object`

A *reducer* is a function that accepts
an accumulation and a value and returns a new accumulation. They are used
to reduce a collection of values down to a single value

Reducers are not unique to Redux—they are a fundamental concept in
functional programming.  Even most non-functional languages, like
JavaScript, have a built-in API for reducing. In JavaScript, it's
`Array.prototype.reduce()`.

In Redux, the accumulated value is the state object, and the values being
accumulated are actions. Reducers calculate a new state given the previous
state and an action. They must be *pure functions*—functions that return
the exact same output for given inputs. They should also be free of
side-effects. This is what enables exciting features like hot reloading and
time travel.

Reducers are the most important concept in Redux.

*Do not put API calls into reducers.*

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | \{ `error`: `errorState` = errorSlice.reducer; `loading`: `loadingState` = loadingSlice.reducer } \| `Partial`\<\{ `error`: `errorState` = errorSlice.reducer; `loading`: `loadingState` = loadingSlice.reducer }\> |
| `action` | `UnknownAction` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error` | `errorState` |
| `loading` | `loadingState` |

#### Defined in

node_modules/redux/dist/redux.d.ts:91

___

### createCommand

▸ **createCommand**\<`Payload`\>(`name`, `saga`): `Object`

#### Type parameters

| Name |
| :------ |
| `Payload` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `saga` | (`action`: \{ `payload`: `Payload` ; `type`: `string`  }) => `Generator`\<`any`, `void`, `never`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `action` | `IsAny`\<`Payload`, `ActionCreatorWithPayload`\<`any`, `string`\>, `IsUnknown`\<`Payload`, `ActionCreatorWithNonInferrablePayload`\<`string`\>, `IfVoid`\<`Payload`, `ActionCreatorWithoutPayload`\<`string`\>, `IfMaybeUndefined`\<`Payload`, `ActionCreatorWithOptionalPayload`\<`Payload`, `string`\>, `ActionCreatorWithPayload`\<`Payload`, `string`\>\>\>\>\> |
| `saga` | (`action`: \{ `payload`: `Payload` ; `type`: `string`  }) => `Generator`\<`any`, `void`, `never`\> |

#### Defined in

[src/createCommand/createCommand.ts:7](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/createCommand/createCommand.ts#L7)

___

### createHOCDecorator

▸ **createHOCDecorator**\<`State`\>(`storeCreator`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `storeCreator` | `StoreCreator`\<`State`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `HocDecorator` | (`Story`: `AnnotatedStoryFn`\<`ReactRenderer`, `any`\>) => `Element` |
| `store` | [`ExtendedStore`](interfaces/ExtendedStore.md)\<`State`\> |
| `useSetTestState` | (`stateDiff`: `Partial`\<`State`\>) => `void` |

#### Defined in

[src/HOCDecorator/index.ts:10](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/HOCDecorator/index.ts#L10)

___

### makeStoreCreator

▸ **makeStoreCreator**\<`State`\>(`reducer`, `rootSaga`): `StoreCreator`\<`State`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | `Reducer`\<`State`\> |
| `rootSaga` | () => `Generator`\<`any`, `any`, `unknown`\> |

#### Returns

`StoreCreator`\<`State`\>

#### Defined in

[src/testing/utils.ts:54](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/testing/utils.ts#L54)

___

### takeLatestCommandSafe

▸ **takeLatestCommandSafe**(`command`): `Generator`\<`Generator`\<`ForkEffect`\<`void`\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `command` | `Object` | `undefined` |
| `command.action` | `ActionCreatorWithNonInferrablePayload`\<`string`\> | `actionCreator` |
| `command.saga` | (`action`: \{ `payload`: `unknown` ; `type`: `string`  }) => `Generator`\<`any`, `void`, `never`\> | `undefined` |

#### Returns

`Generator`\<`Generator`\<`ForkEffect`\<`void`\>, `void`, `unknown`\>, `void`, `unknown`\>

#### Defined in

[src/createCommand/safeEffect.ts:64](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/createCommand/safeEffect.ts#L64)

___

### takeLatestSafe

▸ **takeLatestSafe**(`actionType`, `saga`): `Generator`\<`ForkEffect`\<`void`\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionType` | `string` |
| `saga` | (`action`: `any`) => `Generator`\<`any`, `any`, `unknown`\> |

#### Returns

`Generator`\<`ForkEffect`\<`void`\>, `void`, `unknown`\>

#### Defined in

[src/createCommand/safeEffect.ts:52](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/createCommand/safeEffect.ts#L52)

___

### watchCommandChapter

▸ **watchCommandChapter**(`chapterExports`): () => `Generator`\<`AllEffect`\<`Generator`\<`Generator`\<`ForkEffect`\<`void`\>, `void`, `unknown`\>, `void`, `unknown`\>\>, `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chapterExports` | `commandChapter` |

#### Returns

`fn`

▸ (): `Generator`\<`AllEffect`\<`Generator`\<`Generator`\<`ForkEffect`\<`void`\>, `void`, `unknown`\>, `void`, `unknown`\>\>, `void`, `unknown`\>

##### Returns

`Generator`\<`AllEffect`\<`Generator`\<`Generator`\<`ForkEffect`\<`void`\>, `void`, `unknown`\>, `void`, `unknown`\>\>, `void`, `unknown`\>

#### Defined in

[src/createCommand/createCommand.ts:25](https://github.com/Cutting-Edge-technologies/redux-saga-toolkit/blob/43c9346/src/createCommand/createCommand.ts#L25)
