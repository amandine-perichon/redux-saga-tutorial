import test from 'tape'
import { incrementAsync } from './sagas'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

test('incrementAsync Saga test', (t) => {
  const gen = incrementAsync()

  t.deepEqual(
    gen.next(),
    {done: false, value: call(delay, 1000)}
  )

  t.deepEqual(
    gen.next(),
    {done: false, value: put({type: 'INCREMENT'})}
  )

  t.deepEqual(
    gen.next(),
    {done: true, value: undefined}
  )

  t.end()
})
