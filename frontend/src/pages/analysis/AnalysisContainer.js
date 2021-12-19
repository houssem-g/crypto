import React from "react";
import { AnalysisView } from "./AnalysisView";

export function AnalysisContainer() {
  // console.log("this.props.match.params : ", this)
  return (
    <div>
      <AnalysisView title="Analyse" />
    </div>
  );
}
