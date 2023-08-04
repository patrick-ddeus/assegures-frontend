import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storage, setStorage] = useState(() => {
    try {
      const storagedValue = window.localStorage.getItem(key);
      return storagedValue ? JSON.parse(storagedValue) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (valueToStorage) => {
    try {
      const value =
        valueToStorage instanceof Function
          ? valueToStorage.call(valueToStorage)
          : valueToStorage;
      setStorage(value);
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error);
    }
  };

  return [storage, setValue];
}
