export function simpleId(prefix='id'){
  return prefix + '_' + Math.random().toString(36).slice(2,9)
}
