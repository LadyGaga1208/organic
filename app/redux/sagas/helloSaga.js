import { put, takeLatest, all } from 'redux-saga/effects'
import LikeCounter from '../../api/ApiService';

function* getLikeCounter(action) {
    try {
        console.log('xxxxxxyyyyyyyyxxxxxx');
        const counter = yield LikeCounter.getLikeCounter();
        if (counter) {
            yield put({ type: 'GET_LIKE_COUNTER_SUCCESS', payload: counter });
        } else {
            yield put({ type: 'GET_LIKE_COUNTER_FAIL', payload: counter });
        }
    } catch (error) {
        yield put({ type: 'GET_LIKE_COUNTER_FAIL', payload: null, error });
    }
}


function* helloSaga() {
    yield takeLatest('GET_LIKE_COUNTER', getLikeCounter);
}

export default helloSaga;