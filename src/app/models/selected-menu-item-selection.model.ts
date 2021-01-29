import { Option } from './option.model';

/**
 * An class representing a single menu item selection
 * (Used for exclusive or multiple selections)
 */
export class SelectedMenuItemSelection {

    constructor(

        /* Label for category selection (eg. Toppings) */
        public selectionLabel: string,

        /* the choices tthat have been selected for the selection */
        public options: Option[] = []

    ) {}
}