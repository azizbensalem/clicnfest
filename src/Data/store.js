import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: [],
};

const configureStore = () => {
  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    applyMiddleware(thunk)
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

const {store} = configureStore();
export default store;
