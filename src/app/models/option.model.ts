/**
 * Class representing an option to choose for a selection
 * (eg. "Pepperoni" for selection "Topping")
 */
export class Option {

    constructor(

        /* Description of choice (eg. Extra Cheese) */
        public choice: string,

        /* The difference in price from selecting the option */
        public priceDifference: number = 0
        
    ) {}

}