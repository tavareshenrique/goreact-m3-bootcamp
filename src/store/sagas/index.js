import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes } from '../ducks/favorites';
import { AddFavorite } from './favorites';

// * = generator
export default function* rootSaga() {
  // yield = await
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, AddFavorite)]);
}
