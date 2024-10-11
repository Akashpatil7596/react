import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  loading: false,
};

// Redux Toolkit

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.loading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.loanPurpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance = state.balance - state.loan;
    },
    convertingCurrency(state, action) {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(depositAsync.fulfilled, (state, action) => {
      state.balance = state.balance + action.payload;
    });
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  // If currency is in USD

  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: amount,
    };
  }

  // If currency is other than USD

  return async function (dispatch, getState) {
    dispatch({
      type: "account/convertingCurrency",
    });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();

    const converted = data?.rates?.USD;

    setTimeout(() => {
      dispatch({
        type: "account/deposit",
        payload: converted,
      });
    }, 2000);
  };
}

export const depositAsync = createAsyncThunk(
  "account/depositAsync",
  async (payload) => {
    const { depositAmount, currency } = payload;
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${depositAmount}&from=${currency}&to=USD`
    );

    const data = await res.json();

    const converted = data?.rates?.USD;

    return converted;
  }
);

export default accountSlice.reducer;

// Classic Redux

/*
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state?.balance + action?.payload };
    case "account/withdraw":
      return { ...state, balance: state?.balance - action?.payload };
    case "account/requestLoan":
      if (state?.loan > 0) return state;
      return {
        ...state,
        loan: action?.payload?.amount,
        loanPurpose: action?.payload?.loanPurpose,
        balance: state.balance + action?.payload?.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state?.balance - state?.loan,
      };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  // If currency id USD

  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: amount,
    };
  }

  // If currency is other than USD

  return async function (dispatch, getState) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();

    const converted = data?.rates?.USD;

    dispatch({
      type: "account/deposit",
      payload: converted,
    });
  };
}

export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

export function requestLoan(amount, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, loanPurpose: loanPurpose },
  };
}

export function payLoan() {
  return {
    type: "account/payLoan",
  };
}
*/
