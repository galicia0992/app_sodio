import React from 'react';
import {createContext} from 'react';
import {useContext} from 'react';

const dateContext = createContext();

export const useDateContext = () => {
  return useContext(dateContext);
};
const DateProvider = (props) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const fullDate = day + '-' + (month + 1) + '-' + year;
  return (
    <dateContext.Provider value={fullDate}>
        {props.children}
    </dateContext.Provider>
  )
};

export default DateProvider;
