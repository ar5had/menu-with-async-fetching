import { theme } from "./theme";

// Custom style config for react-select, to make it similar to our current theme
const ReactSelectStyles = {
  menu: provided => ({
    ...provided,
    boxShadow: theme.boxShadow,
    cursor: "pointer"
  }),
  control: (provided, { menuIsOpen, isFocused }) => ({
    ...provided,
    border: "none",
    boxShadow:
      menuIsOpen || isFocused
        ? `0 0 0 1px ${theme.black}`
        : `0 0 0 1px ${theme.darkGrey}`,
    cursor: "pointer"
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    cursor: "pointer",
    background: isFocused ? theme.greyBackground : theme.white,
    color: theme.black,
    padding: "15px 10px",
    margin: "5px 0"
  }),
  indicatorSeparator: () => ({
    display: "none"
  })
};

const ReactSelectTheme = defaultTheme => ({
  ...defaultTheme,
  borderRadius: 4,
  borderWidth: 1,
  colors: {
    ...defaultTheme.colors,
    primary50: theme.greyBackground,
    primary25: "#f1f1f1",
    primary: theme.grey,
    neutral20: theme.darkGrey,
    neutral80: theme.black,
    neutral60: theme.black
  }
});

export { ReactSelectStyles, ReactSelectTheme };
