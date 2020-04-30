import { call, put, takeEvery, takeLatest ,select} from 'redux-saga/effects'

const sleep = time => new Promise(res=>setTimeout(res,time))


function* fetchName(...params){
    console.log('bb')
    yield call(sleep,1000)
    console.log('end')
    const state = yield select();
    console.log(state)
    yield put({type:'set-name',payload:'saga'})
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchName);
}

export default mySaga;

/**
 * 采用生成器的方式来控制异步action
 * yield call 方法调用异步函数
 * put 方法触发 reducer
 * select 方法可以获取当前的 state
 * takeEvery 即同时处理多个相同的 action，但不按顺序返回
 * takeLatest 不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
 *            如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，那么处理中的 action 会被取消，只会执行当前的
 * takeLeading 多次重复触发，只保持第一个执行
 */

// // worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
// function* fetchUser(action) {
//    try {
//       const user = yield call(Api.fetchUser, action.payload.userId);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }

// /*
//   在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
//   允许并发（译注：即同时处理多个相同的 action）
// */
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

// /*
//   也可以使用 takeLatest

//   不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
//   如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
//   那么处理中的 action 会被取消，只会执行当前的
// */
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

// export default mySaga;