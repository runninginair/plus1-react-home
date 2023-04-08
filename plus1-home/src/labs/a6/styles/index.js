import React from "react";
/**     HW6 2.11 Working with the HTML style attribute
 * 
 * In HTML the styles attribute accepts a CSS string to style the element applied to.
 * In React.js, the styles attribute does not accept a string; instead it accepts
 * a JSON object where the properties are CSS properties and the values are CSS values.
 * 
 * The styles component (styles/index.js) declares constant JSON objects that can be
 * applied to elements using the styles attribute. Alternatively, the styles attribute
 * accepts a JSON literal object instance which results in a weird syntax of double curly
 * brackets as shown below. Also note that the Styles component is implemented using the
 * new arrow function syntax. Note we use background-color instead of backgroundColor.
 */

const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }

    // Warning: Unsupported style property background-color.
    // Did you mean backgroundColor?
    const bgBlue = {
        "backgroundColor": "lightblue",
        "color": "black",
        ...padding10px
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...colorBlack,
        ...padding10px
    };
    return (
        <div>
            <h1>Styles</h1>
            <div style={{
                "backgroundColor": "lightyellow",
                "color": "black", padding: "10px"
            }}>
                Yellow background</div>
            <div style={bgRed}>
                Red background</div>
            <div style={bgBlue}>
                Blue background</div>
        </div>
    );
};
export default Styles;