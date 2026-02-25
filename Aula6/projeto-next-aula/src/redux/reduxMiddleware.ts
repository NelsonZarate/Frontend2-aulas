import {Middleware} from '@reduxjs/toolkit';

export const loggerMiddleware : Middleware = (store) => (next) => (action) => {
  console.log('Dispatching action:', action);
  console.log('previous state:', store.getState().counter.value);
  const result = next(action);
  console.log('Next state:', store.getState().counter.value);
  return result;
}
export default loggerMiddleware;