import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import favouritesSaga from '../sagas/favouriteSaga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(favouritesSaga);

export default store;

// Alternative without redux-saga dependency, but required for assignment.

// store.subscribe(() => {
// 	localStorage.setItem(
// 		'favourites',
// 		JSON.stringify(store.getState().favourites)
// 	);
// });
