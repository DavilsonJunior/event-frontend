import produce from 'immer';

const INITIAL_STATE = {
  event: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@event/ADD_EVENT': {
        draft.event = action.payload.event;
        break;
      }
      case '@event/UPDATE_SUCCESS': {
        draft.event = action.payload.data;
        break;
      }
      case '@event/REMOVE_SUCCESS': {
        draft.event = null;
        break;
      }
      default:
        return state;
    }
  });
}
