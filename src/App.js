import React from "react";
import "./App.scss";
import OpenSeadragonContainer from "./containers/OpenSeadragonContainer";
import "./fontawesome-usage";

const App = () => {
  const manifestUrl =
    "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json";

  return <OpenSeadragonContainer iiifManifestUrl={manifestUrl} />;
};

export default App;
