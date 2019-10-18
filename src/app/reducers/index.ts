import {
  ActionReducerMap,
  ActionReducer,
} from '@ngrx/store';


const STORAGE = '@ngrx/store/storage';
const UPDATE = '@ngrx/store/update-reducers';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */

// uncomment when state is filled with anything
// tslint:disable-next-line
export interface State {}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return (state: any, action: any): State => reducer(state, action);
}

/**
 * This meta reducer is necessary for keeping ngrx browser tab state in sync.
 * For now, only key "auth" is syncing.
 * @export localStorageSyncReducer
 * @param {ActionReducer<any>} reducer
 * @returns {ActionReducer<any>}
 */

/* istanbul ignore next */
export const metaReducers: any = logger;
;
