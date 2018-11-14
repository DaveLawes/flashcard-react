//  allows user to set primary stack
// sets stacks
// type identifies action
export const SET_STACK = 'SET_STACK';

export function setStack(stack) {
  return {
    type: SET_STACK,
    stack: stack
  };
}
