import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '@models/option.model';

/**
 * Creates a list of the options seperated by commas and price differences
 * in parethesis from a list of options
 */
@Pipe({
    name: 'ListSelectionOptions'
})
export class ListSelectionOptions implements PipeTransform {
    transform(options: Option[]) {
        //capitalize first element
        options[0].choice = options[0].choice[0].toUpperCase() + options[0].choice.substring(1);

        //Add each option to an array including price difference if exists
        let optionsArray = options.map((option, index, array) => {
            //if there is no price just store the name of the choice
            if(option.priceDifference == 0) return option.choice;

            //store an sign for the price difference (+ or -)
            let sign: string;
            if(option.priceDifference > 0) {
                sign = '+';
            } else {
                sign = '-';
            }

            //add the price to the name of the choice
            return `${option.choice} (${sign}$${option.priceDifference.toFixed(2)})`;

        });

        //return the options (now with prices) seperated by commas
        return optionsArray.join(', ');
    }
}