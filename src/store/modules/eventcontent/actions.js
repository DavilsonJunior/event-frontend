export function removeEventRequest(id) {
  return {
    type: '@event/REMOVE_REQUEST',
    id,
  };
}

export function removeEventSuccess() {
  return {
    type: '@event/REMOVE_SUCCESS',
  };
}

export function updateEventRequest(data) {
  return {
    type: '@event/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateEventSuccess(data) {
  return {
    type: '@event/UPDATE_SUCCESS',
    payload: { data },
  };
}
