export type State = {
  theme?: string;
  state?: any;
  dispatch?: any;
  actions?: any;
  data?: any[];
  columns?: any[];
  records?: number;
  reinit?: boolean;
  columnsArray?: string[];
  columnsCount?: number;
  loading?: boolean;
  reload?: boolean;
};

export const initialState: State = {
  theme: 'default-dark',
  data: [],
  columns: [],
  records: 1000,
  columnsCount: 50,
  columnsArray: [],
  reinit: false,
  loading: false,
  reload: false,
};
