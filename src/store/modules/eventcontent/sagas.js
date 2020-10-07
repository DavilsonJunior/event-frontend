import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateEventSuccess, removeEventSuccess } from './actions';

function* update({ payload }) {
  const { data } = payload;
  try {
    const response = yield call(api.put, `/events/${data.id}`, {});
  } catch (err) {
    toast.error('Falha ao atualizar');
  }
}

function* remove({ id }) {}

export default all([
  takeLatest('@event/UPDATE_REQUEST', update),
  takeLatest('@event/REMOVE_REQUEST', remove),
]);
