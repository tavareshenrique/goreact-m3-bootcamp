import { all, takeLatest } from 'redux-saga/effects';

import { AddFavorite } from './favorites';

// * = generator
export default function* rootSaga() {
  // yield = await
  yield all([takeLatest('ADD_FAVORITE_REQUEST', AddFavorite)]);
}
