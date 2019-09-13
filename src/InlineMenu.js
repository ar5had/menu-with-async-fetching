import React, { Component } from "react";

import AsyncSelect from "react-select/async";
import { ReactSelectStyles, ReactSelectTheme } from "./react-select-styles";
import { colorOptions } from "./data";
import "./InlineMenu.css";

const filterColors = inputValue => {
  return colorOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

class InlineMenu extends Component {
  state = { inputValue: "" };

  handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };

  render() {
    return (
      <AsyncSelect
        className="inline-menu"
        classNamePrefix="inline-menu"
        cacheOptions
        styles={ReactSelectStyles}
        theme={ReactSelectTheme}
        loadOptions={loadOptions}
        defaultOptions
        placeholder="Select color..."
        onInputChange={this.handleInputChange}
      />
    );
  }
}

export default InlineMenu;
