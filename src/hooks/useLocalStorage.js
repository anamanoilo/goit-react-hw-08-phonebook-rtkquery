import { useEffect, useState } from 'react';
import * as storage from 'services/localStorage';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return storage.get(key) ? [...storage.get(key)] : defaultValue;
  });

  useEffect(() => {
    storage.save(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
