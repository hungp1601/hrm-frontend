import {
  isNumber,
  isArray,
  omit,
  forEach,
  mergeWith,
  get,
  set,
  defaultsDeep,
  debounce,
  pick,
  cloneDeep,
  isEqual,
  uniq,
  uniqBy,
  uniqWith,
  merge,
  omitBy,
  unset,
  has,
  isString,
  pickBy,
  isNil,
  isEmpty,
  flatMapDeep,
  flatMap,
  isEqualWithKeys,
  assign,
  isObjectId,
  upperFirst,
  memoize,
  last,
  findLast,
  findLastIndex,
  groupBy,
  throttle,
  getRandomInArray,
  setWith
} from 'lodash'

function getRandomIndexInArray (arr = []) {
  const length = arr.length
  const index = Math.floor(Math.random() * length)
  return arr[index]
}

export {
  isNumber,
  isArray,
  omit,
  forEach,
  mergeWith,
  get,
  set,
  defaultsDeep,
  debounce,
  pick,
  cloneDeep,
  isEqual,
  uniq,
  uniqBy,
  uniqWith,
  merge,
  omitBy,
  unset,
  has,
  isString,
  pickBy,
  isNil,
  isEmpty,
  flatMapDeep,
  flatMap,
  isEqualWithKeys,
  assign,
  isObjectId,
  upperFirst,
  memoize,
  last,
  findLast,
  findLastIndex,
  groupBy,
  throttle,
  getRandomInArray,
  setWith,
  getRandomIndexInArray
}