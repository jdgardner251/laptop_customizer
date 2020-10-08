import React from "react";
import slugify from "slugify";
import FeatureItem from './FeatureItem'

function Feature(props) {
  
  const options = props.features[props.feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));

    return (
      <FeatureItem
        key={itemHash}
        id={itemHash}
        feature={props.feature}
        item={item}
        selected={props.selected}
        updateFeature={props.updateFeature}
      />
    );
  });
  return (
    <fieldset className="feature" >
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}

export default Feature;
