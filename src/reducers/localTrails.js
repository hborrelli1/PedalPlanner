export const localTrails = (state = [], action) => {
  switch (action.type) {
    case 'SET_LOCAL_TRAILS':
      return state = action.allTrails;

    default:
      return state
  }
}
