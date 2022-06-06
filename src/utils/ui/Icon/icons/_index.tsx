import { dropdownIcon } from './dropdown'
import { statsIcon } from './stats'
import { tomatoIcon } from './tomato'

export const enum EIcons { tomato, stats, dropdown }

export const icons = {
  [EIcons.tomato]: tomatoIcon,
  [EIcons.stats]: statsIcon,
  [EIcons.dropdown]: dropdownIcon,
}