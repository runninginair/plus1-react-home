import NavigationItem from "./NavigationItem.js";
import Items from "./items.js";

const NavigationList = (active) => {

    return (`
            ${Items.map(item => {
        return (NavigationItem(item, active));
    }).join('')
        }
    `);
}
export default NavigationList;