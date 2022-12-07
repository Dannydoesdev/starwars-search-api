import { useState, useEffect, } from 'react';

const useLocalStorage = (key, value) => {
// const useLocalStorage = (key: string, value: string) => {
  // const [favourite, setFavourite] = useState('');
  // console.log('useLocalStorage called')
  useEffect(() => {
    console.log('useEffect')
      const stored = localStorage.getItem(key)

    if (stored) {
      localStorage.removeItem(key)
      // setFavourite('Favourite removed')
    } else {

      localStorage.setItem(key, JSON.stringify(value))
      // setFavourite('Favourite saved')

    }
  }, [value, key]);

  // useEffect(() => {
  //     localStorage.setItem(key, JSON.stringify(favourite));
  // }, [key, favourite]);
  // return favourite

  // return [favourite, setFavourite] as const;
}


export default useLocalStorage
