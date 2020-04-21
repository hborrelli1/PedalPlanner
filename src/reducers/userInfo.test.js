import { userInfo } from './userInfo';

describe('userInfo reducers test', () => {
  let emptyUser;
  let userData;

  beforeEach(() => {
    emptyUser = {
      name: 'Harry',
      username: '',
    	location:'',
    	friends: [],
      pastRides: [
        {
          id: 1,
          date: 'May 22',
          trail: 'White Ranch Trail',
          location: 'Golden, CO',
          friends: ['Tyler', 'Jeff', 'Doug']
        }
      ],
    	upcomingRides: []
    };

    userData = {
      name: 'Harry',
      username: 'pedalUser',
      location:'',
      friends: ['Tyler', 'Jeff', 'Doug'],
      pastRides: [
        {
          id: 1,
          date: '2020-03-22',
          time: '7:00pm',
          trail: 'White Ranch Trail',
          trailId: 632917,
          difficulty: 'black',
          location: 'Golden, CO',
          friends: ['Tyler', 'Jeff', 'Doug'],
          message: "Let's shred boys!"
        }
      ],
      upcomingRides: []
    }
  })

  it('should return the initial state', () => {
    const expected = emptyUser;
    const result = userInfo(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should be able to login', () => {
    const action = {
      type:'LOGIN',
      userInfo: userData
    }
    const result = userInfo(emptyUser, action);
    expect(result).toEqual(userData)
  });

  it('should be able to LOGOUT', () => {
    const action = {
      type: 'LOGOUT',
      defaultUserInfo: emptyUser
    }
    const result = userInfo(userData, action);
    expect(result).toEqual(emptyUser);
  });

  it('should be able to PLAN_RIDE', () => {
    const action = {
      type: 'PLAN_RIDE',
      ride: {
        id: 8887,
        date: '05/22/20',
        time: '8:00am',
        trail: 'Little Scraggy Trail',
        trailId: 84755,
        location: 'Pine, Colorado',
        difficulty: 'black',
        message: 'lets send it!',
        friends: ['Jorge, Scott']
      }
    }
    const updatedUserData = {
      name: 'Harry',
      username: 'pedalUser',
      location:'',
      friends: ['Tyler', 'Jeff', 'Doug'],
      pastRides: [
        {
          id: 1,
          date: '2020-03-22',
          time: '7:00pm',
          trail: 'White Ranch Trail',
          trailId: 632917,
          difficulty: 'black',
          location: 'Golden, CO',
          friends: ['Tyler', 'Jeff', 'Doug'],
          message: "Let's shred boys!"
        }
      ],
      upcomingRides: [
        {
          id: 8887,
          date: '05/22/20',
          time: '8:00am',
          trail: 'Little Scraggy Trail',
          trailId: 84755,
          location: 'Pine, Colorado',
          difficulty: 'black',
          message: 'lets send it!',
          friends: ['Jorge, Scott']
        }
      ]
    }
    const result = userInfo(userData, action);
    expect(result).toEqual(updatedUserData)
  })
})
