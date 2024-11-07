// /lib/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { type RootState, type AppDispatch, store } from './store';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = () => store;