import { EntriesState } from './EntriesProvider';

type EntriesActionType = { type: 'ADD_ENTRY'; payload: string };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType,
): EntriesState => {
  switch (action.type) {
    default:
      return state;
  }
};
