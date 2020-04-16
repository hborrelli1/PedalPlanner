export const login = userInfo => ({
  type: 'LOGIN',
  userInfo
});

export const logout = defaultUserInfo => ({
  type: 'LOGOUT',
  defaultUserInfo
})

export const setLocalTrails = allTrails => ({
  type: 'SET_LOCAL_TRAILS',
  allTrails
})
