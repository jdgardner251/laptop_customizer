import React from "react";
import slugify from "slugify";
import FeatureItem from "./FeatureItem";
import Feature from "./Feature";

function Custom(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));

      return (
        <FeatureItem
          key={itemHash}
          feature={feature}
          item={item}
          selected={props.selected}
          updateFeature={props.updateFeature}
        />
      );
    });

    return (
      <Feature
        feature={feature}
        options={options}
        featureHash={props.featureHash}
      />
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
