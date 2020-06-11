const CounterActionTypes = {
    INCREASE_COUNT: 'INCREASE_COUNT',
    DECREASE_COUNT: 'DECREASE_COUNT',
    RESET_COUNT: 'RESET_COUNT'
}

// create user action types
const UserActionTypes = {
    FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCESS: 'FETCH_USERS_SUCESS',
    FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE'
}

// export user actions type
export default {
    ...UserActionTypes,
    ...CounterActionTypes
}