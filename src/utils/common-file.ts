// import { ClassValue, clsx } from 'clsx'
// import { clsx } from 'clsx'
// import { twMerge } from 'tailwind-merge'

// export function cn(...inputs) {
//   return twMerge(ClassNameValue.classLists[0],clsx(ClassValue, inputs[0], inputs));
// }

import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}