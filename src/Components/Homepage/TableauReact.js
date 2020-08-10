import React, { Component } from "react";
import TableauReport from "tableau-react";

const options = {
  hideTabs: false,
  // All other vizCreate options are supported here, too
  // They are listed here: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#vizcreateoptions_record
};

const filters = {
  Colors: ["Blue", "Red"],
  Sizes: ["Small", "Medium"],
};

const parameters = {
  Param1: "Value",
  Param2: "Other Value",
};
export default class TableauReact extends Component {
  render() {
    return (
      <div>
        <div id="">
          <section className="charts">
            <div className="container">
              <TableauReport
                filters={filters}
                parameters={parameters}
                options={options} // vizCreate options
                url="https://public.tableau.com/views/Book1_15936634466460/Story1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
