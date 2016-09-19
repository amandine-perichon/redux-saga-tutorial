import { takeEvery, delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { requestQuote } from './api'

export function* helloSaga() {
  console.log('Hello!')
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* fetchQuote() {
  try {
    const data = yield call(requestQuote)
    console.log(data)
    yield put({type: 'QUOTE_REQUEST_SUCCEEDED', quote: data.quote})
  }
  catch(error) {
    yield put({type: 'QUOTE_REQUEST_FAILED', error})
  }
}

export function* watchQuote() {
  yield* takeEvery('FETCH_QUOTE', fetchQuote)
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
    watchQuote()
  ]
}
