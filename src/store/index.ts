import {combineReducers, configureStore} from "@reduxjs/toolkit";

//импортирую значение airportSlice.reducer  как  airportReducer:
import airportReducer from "./slices/airportSlice";
import handbookReducer from "./slices/handbookSlice";
import {settingsReducer} from "./slices/settingsSlice";

const rootReducer = combineReducers({
	airport: airportReducer,
	handbook: handbookReducer,
	settings: settingsReducer,
})

export function setupStore() {
	return configureStore({
		reducer: rootReducer
	})
}

//теперь можем получить store здесь, но лучше будем делать это в корневом index.tsx
//export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']

