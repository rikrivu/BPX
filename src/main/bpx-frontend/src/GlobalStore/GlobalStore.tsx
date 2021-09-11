import React, { Context, createContext, Dispatch, useReducer } from "react";

export interface GlobalStoreState {
  [key: string]: any;
}

export interface GlobalStoreAction {
  type: string;
  data: any;
}

const initialState: GlobalStoreState = {
  isLoading: false,
  tableLoading: true,
  showNotifier: {
    show: 'initial',
    type: null
  }
};
const globalStore: Context<GlobalStoreState> = createContext<GlobalStoreState>(initialState);
// console.log('GlobalStore', GlobalStore);
const Provider: React.Provider<GlobalStoreState> = globalStore.Provider;

const GlobalStateProvider = ( { children } : any ) => {
    
    const [state, dispatch]: [GlobalStoreState, Dispatch<GlobalStoreAction[]>]
    = useReducer<(state: GlobalStoreState, actions: GlobalStoreAction[]) => GlobalStoreState>
    (
      (state: GlobalStoreState, actions: GlobalStoreAction[]) => {
  
      const newState: GlobalStoreState = {...state};
      actions.forEach(action => {
        newState[action.type] = action.data;
      })
        // console.log('Actions', action, state, newState);
      return newState;
  
    }, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  
export { globalStore, GlobalStateProvider }