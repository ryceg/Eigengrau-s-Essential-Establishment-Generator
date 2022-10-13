import { Information } from './religion'

export const isInformationEmpty = (info: Information[] | Information) => {
  if (Array.isArray(info)) {
    if (info[0].description || (info[0].children && info[0].children.length > 0)) return false
  } else {
    if (info.description || (info.children && info.children.length > 0)) return false
  }
  return true
}
