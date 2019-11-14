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