import React from 'react';
import slugify from "slugify";

function FeatureItem(props) {
    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      
    return (
        <div className="feature__item">
        <input
          type="radio"
          id={props.id}
          className="feature__option"
          name={slugify(props.feature)}
          checked={props.item.name === props.selected[props.feature].name}
          onChange={(e) => props.updateFeature(props.feature, props.item)}
        />
        <label htmlFor={props.id} className="feature__label">
          {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
        </label>
       </div>
    )
}

export default FeatureItem;


