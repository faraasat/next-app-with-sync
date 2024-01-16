import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCount: (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    subtractCount: (state) => {
      if (state.count === 0) return state;
      return {
        ...state,
        count: state.count - 1,
      };
    },
    resetCount: () => initialState,
  },
});

export const { addCount, subtractCount, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
