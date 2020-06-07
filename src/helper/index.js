export const actionCreator = action => payload => ({action, payload});
export const changeAction = actionCreator('change');
export const incrementAction = actionCreator('increment');
export const decrementAction = actionCreator('decrement');
export const resetAction = actionCreator('reset');
