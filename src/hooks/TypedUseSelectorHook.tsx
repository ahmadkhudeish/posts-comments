import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from "../reducers/RootState";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
