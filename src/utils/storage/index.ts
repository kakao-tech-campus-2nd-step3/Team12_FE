const initStorage = <T extends keyof StorageKey>(key: T, storage: Storage) => {
  const get = (): StorageKey[T] => {
    let value;

    try {
      value = JSON.parse(storage.getItem(key) as string);
    } catch (e) {
      return undefined;
    }

    return value;
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
