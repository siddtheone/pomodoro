export const initialState = {
  isPaused: false,
  session: 25,
  Break: 5,
  mm: 25,
  ss: 0,
  isSession: true,
  intervalId: null
}

export default function reducer(state, {action, payload}) {
  switch (action) {
    case 'change':
      const {name, value} = payload;
      const y = {};
      if (name === 'session') {
        y.mm = value
      }

      return {
        ...state,
        [name]: value,
        ...y
      }
    case 'lapse':
      const {mm, ss, Break, session, isSession, isPaused} = state;
      if (isPaused) {
        return {...state};
      }

      if (mm > 0 || ss > 0) {
        return {
          ...state,
          ss: ss === 0 ? 59 : ss - 1,
          mm: ss === 0 ? mm - 1 : mm
        }
      } else {
        return {
          ...state,
          mm: isSession ? Break : session,
          ss: 0,
          isSession: !isSession
        }
      }
    case 'increment':
      const e = {};
      const next = state[payload] < 60 ? state[payload] + 1 : state[payload];
      if (payload === 'session') {
        e.mm = next;
      }
      return {
        ...state,
        [payload]: next,
        ...e
      }
    case 'decrement':
      const x = {};
      const nextD = state[payload] > 1 ? state[payload] - 1 : state[payload];
      if (payload === 'session') {
        x.mm = nextD;
      }
      return {
        ...state,
        [payload]: nextD,
        ...x
      }
    case 'reset':
      return {
        ...initialState
      }
  }
}
