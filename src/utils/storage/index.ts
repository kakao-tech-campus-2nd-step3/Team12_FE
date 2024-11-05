const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const get = (): StorageKey[T] => {
    const value = storage.getItem(key);

    return JSON.parse(value as string);
  };
  const set = (value: StorageKey[T]) => {
    const stringifiedValue = JSON.stringify(value);
    storage.setItem(key, stringifiedValue);
  };
  const remove = () => {
    storage.removeItem(key);
  };
  return { get, set, remove };
};

export const tokenStorage = initStorage('accessToken', localStorage);

interface StorageKey {
  accessToken?: string;
}
