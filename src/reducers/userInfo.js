const emptyUser = {
  name: '',
  username: '',
	location:'',
	friends: [],
	pastRides: [],
	upcomingRides: []
}

export const userInfo = (state = emptyUser, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state = action.userInfo;
    default:
      return state
  }
}
