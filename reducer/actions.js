export const doLogin = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const doLogout = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const setUserData = (data) => {
  return {
    type: 'SIGNED_IN',
    payload: data
  }
}

export const setMovieList = (data) => {
  return {
    type: 'SET_LIST',
    payload: data
  }
}

export const setCurrentData = (data) => {
  return {
    type: 'SET_DATA',
    payload: data
  }
}