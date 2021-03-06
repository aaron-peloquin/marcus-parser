/**
 * Save an object to localStorage as a JSON string
 * @param {str} key The unique key you want to over/write to localStorage (prefixed with "mark-")
 * @param {obj} state The object you want to save to this key
 * @param {bool} showWarning Defaulted to if window is undefined, enables console.warn when true if we cannot save
 */
const hasWindow = (typeof window !== 'undefined')

export const localStorageSave = (key, obj, showWarning=hasWindow) => {
  try {
    const saveObj = JSON.stringify(obj)
    localStorage.setItem(`mark-${key}`, saveObj)
  } catch (e) {
    if (showWarning) {
      console.warn('[localStorageSave] not accessible to save')
    }
  }
}

/**
 * Load and parse a JSON string from localStorage
 * @param {str} key The key you want to load from
 * localStorage (prefixed with "mark-")
 * @returns {obj} the parsed object from lcoalStorage
 * @param {bool} showWarning Defaulted to if window is undefined, enables console.warn when true if we cannot save
 */

export const localStorageLoad: any = (key, showWarning=hasWindow) => {
  let returnData = {}
  try {
    const localData = localStorage.getItem('mark-'+key)
    if (localData) {
      const localDataJSON = JSON.parse(localData)
      if (localDataJSON) {
        returnData = localDataJSON
      }
    }
  } catch (e) {
    if (showWarning) {
      console.warn('[localStorageLoad] not accessible to load')
    }
  }
  return returnData
}
