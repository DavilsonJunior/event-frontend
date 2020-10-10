import {
  call, select, put, all, takeLatest
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateEventSuccess, removeEventSuccess } from './actions';

function* updateEvent({ payload }) {
  const { data } = payload;
  try {
    const response = yield call(api.put, `/events/${data.id}`, {});
  } catch (err) {
    toast.error('Falha ao atualizar');
  }
}

function* removeEvent({ id }) {}

export default all([
  takeLatest('@event/UPDATE_REQUEST', updateEvent),
  takeLatest('@event/REMOVE_REQUEST', removeEvent),
]);
