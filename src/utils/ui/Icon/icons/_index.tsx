import { dropdownIcon } from './dropdown'
import { minusIcon } from './minus'
import { penIcon } from './pen'
import { plusIcon } from './plus'
import { statsIcon } from './stats'
import { tomatoIcon } from './tomato'
import { tomatoSmileIcon } from './tomato-smile'
import { trashIcon } from './trash'

export const enum EIcons { tomato, tomatoSmile, stats, dropdown, plus, minus, pen, trash }

export const icons = {
  [EIcons.tomato]: tomatoIcon,
  [EIcons.tomatoSmile]: tomatoSmileIcon,
  [EIcons.stats]: statsIcon,
  [EIcons.dropdown]: dropdownIcon,
  [EIcons.plus]: plusIcon,
  [EIcons.minus]: minusIcon,
  [EIcons.pen]: penIcon,
  [EIcons.trash]: trashIcon,
}