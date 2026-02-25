import { combineReducers, configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";
import { loggerMiddleware } from "./reduxMiddleware";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, REGISTER, PURGE, REHYDRATE } from "redux-persist";

const counterPersistConfig = {
	key: "counter",
	storage,
};

const cartPersistConfig = {
	key: "cart",
	storage,
};

const persistedCounterReducer = persistReducer(counterPersistConfig, counterReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = {
	counter: persistedCounterReducer,
	cart: persistedCartReducer,
};

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));
export const store = configureStore({ 
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
	}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);