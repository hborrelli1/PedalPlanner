import { localTrails } from '../reducers/localTrails';

describe('localTrails Reducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = localTrails(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should be able to set local trails', () => {
    const expected = [
      {
        "id": 46286,
        "name": "Betasso Preserve",
        "type": "Ride",
        "summary": "A solid ride close to Boulder that is often ridden from town.",
        "difficulty": "blue",
        "stars": 4,
        "starVotes": 250,
        "location": "Boulder, Colorado",
        "url": "https://www.mtbproject.com/trail/46286/betasso-preserve",
        "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7002944_sqsmall_1554403854.jpg",
        "imgSmall": "https://cdn-files.apstatic.com/mtb/7002944_small_1554403854.jpg",
        "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7002944_smallMed_1554403854.jpg",
        "imgMedium": "https://cdn-files.apstatic.com/mtb/7002944_medium_1554403854.jpg",
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
    ]

    const action = {
      type:'SET_LOCAL_TRAILS',
      allTrails: expected
    }

    const result = localTrails([], action);
    expect(result).toEqual(expected);
  })
});
