export const checkDone = (payload) => {
    return {
        type: "DONE",
payload,
    };
};
export const checkNotDone = (payload) => {
  return {
    type: "NOT_DONE",
    payload,
  };
};
export const deletetask = (payload) => {
  return {
    type: "DELETE_TASK",
    payload,
  };
};
export const showEdit = (payload) => {
  return {
    type: "SHOW_EDIT",
    payload,
  };
};