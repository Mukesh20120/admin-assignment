import { useState, useEffect, useCallback } from "react";

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue === null) return defaultValue;
    try {
      return JSON.parse(jsonValue);
    } catch (e) {
      console.error(`Error parsing stored value for key "${key}":`, e);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) {
      storageObject.removeItem(key);
    } else {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storageObject]);

  const removeALL = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, removeALL];
}
