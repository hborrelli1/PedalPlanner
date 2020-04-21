import * as actions from './index.js';

describe('Actions Tests', () => {
  it('should have a type of LOGIN', () => {
    const userInfo = {
      name: 'Harry',
    }
    const expectedAction = {
      type: 'LOGIN',
      userInfo: {
        name: 'Harry'
      }
    }
    const result = actions.login(userInfo);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOGOUT', () => {
    const emptyUser = {
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
    }
    const expectedAction = {
      type: 'LOGOUT',
      defaultUserInfo: emptyUser
    }
    const result = actions.logout(emptyUser);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SET_LOCAL_TRAILS', () => {
    const localTrails = {
      "id": 46286,
      "name": "Betasso Preserve",
      "type": "Ride",
      "summary": "A solid ride close to Boulder that is often ridden from town.",
      "difficulty": "blue",
      "stars": 4,
      "starVotes": 250,
      "location": "Boulder, Colorado",
      "url": "https://www.mtbproject.com/trail/46286/betasso-preserve",
      "length": 7.4,
      "ascent": 829,
      "descent": -829,
      "high": 6589,
      "low": 6178,
      "longitude": -105.3422,
      "latitude": 40.0155,
      "conditionStatus": "Minor Issues",
      "conditionDetails": "Snowy, Some Mud, Icy",
      "conditionDate": "2020-03-08 18:49:53"
    }
    const expectedAction = {
      type: 'SET_LOCAL_TRAILS',
      allTrails: localTrails
    }
    const result = actions.setLocalTrails(localTrails);
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of PLAN_RIDE', () => {
    const ride = {
      id: 3,
      date: '03/23/20',
      trail: 'Little Scraggy Trail',
      trailId: 473894,
      time: '9:00am',
      message: 'Lets send it!',
      friends: ['Tyler', 'Jackson'],
    }
    const expectedAction = {
      type: 'PLAN_RIDE',
      ride: ride
    }
    const result = actions.planRide(ride);
    expect(result).toEqual(expectedAction);
  })
})
