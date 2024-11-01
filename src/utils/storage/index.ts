const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const get = (): StorageKey[T] => {
    const value = storage.getItem(key);

    return JSON.parse(value as string);
  };
  const set = (value?: StorageKey[T]) => {
    if (typeof value === 'undefined' || value === null) {
      storage.removeItem(key);
      return;
    }
    const stringifiedValue = JSON.stringify(value);
    storage.setItem(key, stringifiedValue);
  };
  return { get, set };
};

export const tokenStorage = initStorage('accessToken', localStorage);

interface StorageKey {
  accessToken?: string;
}
