const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

export { logger };

export const featuring = (store) => (next) => (actionInfo) => {
  const futured = [{ name: "Danniel" }, ...actionInfo.action.payload];
  const updatedAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: futured },
  };
  return next(updatedAction);
};
