import produce from 'immer';

export const initialState = {

};

// (이전상태,액션) => 다음상태
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    default:
      break;
  }
});

export default reducer;
