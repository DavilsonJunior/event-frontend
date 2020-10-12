import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { updateEventSuccess, removeEventSuccess } from './actions';

function* updateEvent({ payload }) {
  const {
    id, description, date_initial, date_final
  } = payload.data;

  console.log({ date_initial, date_final });
  try {
    const response = yield call(api.put, `/events/${id}`, {
      id, description, date_initial, date_final
    });

    yield updateEventSuccess(response.data);

    history.push('/eventos');
    toast.success('Evento atualizado com sucesso');
  } catch (err) {
    toast.error('Falha ao atualizar');
  }
}

function* removeEvent({ id }) {
  if (!id) return;

  try {
    yield call(api.delete(`/events/${id}`));

    yield put(removeEventSuccess());

    history.push('/eventos');
    toast.success('Evento deletado com sucesso!');
  } catch (err) {
    console.log(err);
    toast.error('Falha ao remover esse evento!');
  }
}

export default all([
  takeLatest('@event/UPDATE_REQUEST', updateEvent),
  takeLatest('@event/REMOVE_REQUEST', removeEvent),
]);
