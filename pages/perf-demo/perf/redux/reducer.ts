import { initialState, State } from './initialState';

const SET_THEME = 'SET_THEME';
const SET_RECORDS_DATA = 'SET_RECORDS_DATA';
const SET_RECORDS = 'SET_RECORDS';
const SET_COLUMNS_ARRAY = 'SET_COLUMNS_ARRAY';
const SET_COLUMNS = 'SET_COLUMNS';
const SET_COLUMNS_COUNT = 'SET_COLUMNS_COUNT';
const SET_REINIT = 'SET_REINIT';
const SET_LOADING = 'SET_LOADING';
const SET_RELOAD = 'SET_RELOAD';

const getActions = (dispatch: any) => {
  return {
    setTheme: (theme: string) => {
      dispatch({
        type: SET_THEME,
        payload: theme,
      });
    },

    setReinit: () => {
      dispatch({
        type: SET_REINIT,
      });
    },

    setColumnsArray: (columns: string[]) => {
      dispatch({
        type: SET_COLUMNS_ARRAY,
        payload: columns,
      });
    },

    setData: (data: any[]) => {
      dispatch({
        type: SET_RECORDS_DATA,
        payload: data,
      });
    },

    setColumns: (columns: any[]) => {
      dispatch({
        type: SET_COLUMNS,
        payload: columns,
      });
    },

    setRecords: (records: number) => {
      dispatch({
        type: SET_RECORDS,
        payload: records,
      });
    },

    setColumnsCount: (columnsCount: number) => {
      dispatch({
        type: SET_COLUMNS_COUNT,
        payload: columnsCount,
      });
    },

    setLoading: (loading: boolean) => {
      dispatch({
        type: SET_LOADING,
        payload: loading,
      });
    },

    setReload: (reload: boolean) => {
      dispatch({
        type: SET_RELOAD,
        payload: reload,
      });
    },
  };
};

const setTheme = (state: State, action: any) => {
  return {
    ...state,
    theme: action.payload.theme,
  };
};

const setReinit = (state: State, action: any) => {
  return {
    ...state,
    reinit: !state.reinit,
  };
};

const setColumnsArray = (state: State, action: any) => {
  return {
    ...state,
    columnsArray: action.payload,
  };
};

const setData = (state: State, action: any) => {
  return {
    ...state,
    data: action.payload,
  };
};

const setColumns = (state: State, action: any) => {
  return {
    ...state,
    columns: action.payload,
  };
};

const setRecords = (state: State, action: any) => {
  return {
    ...state,
    records: action.payload,
  };
};

const setColumnsCount = (state: State, action: any) => {
  return {
    ...state,
    columnsCount: action.payload,
  };
};

const setLoading = (state: State, action: any) => {
  return {
    ...state,
    loading: action.payload,
  };
};

const setReload = (state: State, action: any) => {
  return {
    ...state,
    reload: action.payload,
  };
};

const reducers: any = {
  SET_THEME: setTheme,
  SET_REINIT: setReinit,
  SET_COLUMNS_ARRAY: setColumnsArray,
  SET_RECORDS_DATA: setData,
  SET_COLUMNS: setColumns,
  SET_RECORDS: setRecords,
  SET_COLUMNS_COUNT: setColumnsCount,
  SET_LOADING: setLoading,
  SET_RELOAD: setReload,
};

const appReducer = (
  state: State = initialState,
  action: { type: any; payload?: any }
) => {
  const fn = reducers[action.type];
  if (fn) {
    return fn(state, action);
  }

  return state;
};

export { getActions };
export default appReducer;
