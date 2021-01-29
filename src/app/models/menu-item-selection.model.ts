import { Option } from './option.model';

/**
 * An class representing a single menu item selection
 * (Used for exclusive or multiple selections)
 */
export class MenuItemSelection {

    constructor(

        /* Label for category selection (eg. Toppings) */
        public selectionLabel: string,

        /* The minumum number of allowed selections */
        public minAllowed: number,

        /* The maximum number of allowed selections. null means no max */
        public maxAllowed: number,

        /* the choices to be made as well as any difference in price for
           that selection                                                */
        public options: Option[] = []

    ) {}
}