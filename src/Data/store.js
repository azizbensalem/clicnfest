import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from "./reducers/cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["addedItems" , "total"],
};

const configureStore = () => {
  const store = createStore(persistReducer(persistConfig, cartReducer));
  const persistor = persistStore(store);
  return { store, persistor };
};

const {store} = configureStore();
export default store;
