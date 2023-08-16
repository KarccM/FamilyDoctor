export default function useLocalStorage() {
  function readFromLocalStorage(key:string, type:string = 'string') : string|object 
  {
    let localStorageValue = localStorage.getItem(key);
    if(localStorageValue === null )
      return '';
    if(type === 'string') return localStorageValue;
    if(type === 'object') return JSON.parse(localStorageValue);
    if(type === 'array') return localStorageValue.split(',');
    return '';
  }

  function writeOnLocalStorage(key:string, value:string|object): void 
  {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function deleteFromLocalStorage(key:string):void
  {
    localStorage.removeItem(key)
  }

  return {
    readFromLocalStorage,
    writeOnLocalStorage,
    deleteFromLocalStorage,
  }
}