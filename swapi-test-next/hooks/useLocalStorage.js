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




// function useLocalStorage<T>(key: string, fallbackValue: T) {
//   const [value, setValue] = useState(fallbackValue);
//   useEffect(() => {
//       const stored = localStorage.getItem(key);
//       setValue(stored ? JSON.parse(stored) : fallbackValue);
//   }, [fallbackValue, key]);

//   useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue] as const;
// }