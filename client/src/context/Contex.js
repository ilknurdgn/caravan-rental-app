import {
  Children,
  createContext,
  useEffect,
  useReducer,
  useContext,
} from 'react';
import Reducer from './Reducer';
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
  reservationData: null, // Yeni eklenen rezervasyon bilgileri
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        reservationData: state.reservationData, // Yeni eklenen rezervasyon bilgileri
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useReservation = () => useContext(Context);
