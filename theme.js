const theme = {
  colors: {
    primaryPlus2: "#0081cc",
    primaryPlus1: "#009feb",
    primary: "#00beff",
    primaryMinus1: "#7ddcff",
    primaryMinus2: "#d6f5ff",

    darkbluePlus2: "#00357b",
    darkbluePlus1: "#00449c",
    darkblue: "#0056b3",
    darkblueMinus1: "#3176c2",
    darkblueMinus2: "#5f95d0",

    greenPlus2: "#008878",
    greenPlus1: "#00ae97",
    green: "#00cbae",
    greenMinus1: "#75e2c9",
    greenMinus2: "#bcefe2",

    yellowPlus2: "#a69f03",
    yellowPlus1: "#c3c001",
    yellow: "#ded807",
    yellowMinus1: "#eceb73",
    yellowMinus2: "#f5f3d0",

    redPlus2: "#c42151",
    redPlus1: "#e3385c",
    red: "#f9587a",
    redMinus1: "#fba3b1",
    redMinus2: "#fcdde2",

    purplePlus2: "#443ba8",
    purplePlus1: "#544dc9",
    purple: "#766ddd",
    purpleMinus1: "#b2aeeb",
    purpleMinus2: "#e2dff6",

    grayPlus3: "#0c2846",
    grayPlus2: "#1e3f6b",
    grayPlus1: "#6b8fbc",
    gray: "#8fb0d4",
    grayMinus1: "#bed2e8",
    grayMinus2: "#e3ecf5",
    grayMinus3: "#f6f7fa",

    black: "#000",
    white: "#fff",
  },
  fonts: {
    body: "'Open Sans', 'Segoe UI', Tahoma, sans-serif",
  },
  fontSizes: {
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",
    48: "48px",
  },
  fontWeights: {
    regular: "400",
    medium: "600",
    bold: "700",
  },
  lineHeights: {
    sm: "1.3",
    md: "1.5",
    lg: "1.7",
  },
  sizes: {
    width: {
      "1/12": `${(1 / 12) * 100}%`,
      "2/12": `${(2 / 12) * 100}%`,
      "3/12": `${(3 / 12) * 100}%`,
      "4/12": `${(4 / 12) * 100}%`,
      "5/12": `${(5 / 12) * 100}%`,
      "6/12": `${(6 / 12) * 100}%`,
      "7/12": `${(7 / 12) * 100}%`,
      "8/12": `${(8 / 12) * 100}%`,
      "9/12": `${(9 / 12) * 100}%`,
      "10/12": `${(10 / 12) * 100}%`,
      "11/12": `${(11 / 12) * 100}%`,
      "12/12": `${(12 / 12) * 100}%`,
      "1/6": `${(1 / 6) * 100}%`,
      "1/4": `${(1 / 4) * 100}%`,
      "1/3": `${(1 / 3) * 100}%`,
      "1/2": `${(1 / 2) * 100}%`,
    },
  },
  borderWidths: {
    sm: "1px",
    md: "2px",
  },
  borderRadius: {
    sm: "2px",
    default: "4px",
    lg: "8px",
  },
  shadows: {
    sm: "0 1px 3px 0 rgba(0,0,0,0.15)",
    md: "0 1px 6px 0 rgba(0,0,0,0.1)",
    lg: "0 2px 12px 0 rgba(0,0,0,0.1)",
    header: "0 2px 6px 0 rgba(0,0,0,0.1)",
    sidebar: "0 0 4px 0 rgba(0,0,0,0.2)",
    focusedInput: "0 0 0 1px #009feb"
  },
  opacities: {
    15: 0.15,
    30: 0.3,
    50: 0.5,
    80: 0.8,
  },
};

module.exports = theme;