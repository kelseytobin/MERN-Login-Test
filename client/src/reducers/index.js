//user combinedReducers from redux to combine our authReducer and errorReducer
//one single rootReducer

import { combinedReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

export default combinedReducers({
  auth: authReducer,
  errors: errorReducer
});