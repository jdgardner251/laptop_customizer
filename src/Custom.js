import React from "react";
import Feature from "./Feature";
import FEATURES from './store.js';

function Custom(props) {
  
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    
    return (
      <Feature
        key={featureHash}
        feature={feature}
        features={FEATURES}
        selected={props.selected}
        updateFeature={props.updateFeature}
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
