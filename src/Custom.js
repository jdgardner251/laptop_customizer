import React from "react";
import slugify from "slugify";
import FeatureItem from "./FeatureItem";

function Custom(props) {

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));

      return <FeatureItem 
        itemHash={itemHash} 
        feature={feature}
        item={item} 
        selected={props.selected}
        updateFeature={props.updateFeature}
        />;
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}

export default Custom;
