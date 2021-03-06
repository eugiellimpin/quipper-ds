const theme = {
  screens: {
    // min-width
    md: "769px",
    lg: "1025px",
  },
  colors: {
    blue60: "#0081cc",
    blue50: "#009feb",
    blue40: "#00beff",
    blue30: "#7ddcff",
    blue20: "#cbf2fe",
    blue10: "#ebfaff",

    darkblue60: "#00357b",
    darkblue50: "#00449c",
    darkblue40: "#0056b3",
    darkblue30: "#3176c2",
    darkblue20: "#5f95d0",

    green60: "#008878",
    green50: "#00ae97",
    green40: "#00cbae",
    green30: "#75e2c9",
    green20: "#bcefe2",
    green10: "#e5f9f6",

    orange60: "#cc4004",
    orange50: "#e7580c",
    orange40: "#fc7d20",
    orange30: "#ffb580",
    orange20: "#fadfc9",
    orange10: "#fcefe4",

    yellow60: "#a69f03",
    yellow50: "#c3c001",
    yellow40: "#ded807",
    yellow30: "#eceb73",
    yellow20: "#f5f3ae",
    yellow10: "#f8f7e0",

    red60: "#c42151",
    red50: "#e3385c",
    red40: "#f9587a",
    red30: "#fba3b1",
    red20: "#fcdde2",
    red10: "#fef2f7",

    purple60: "#443ba8",
    purple50: "#544dc9",
    purple40: "#766ddd",
    purple30: "#b2aeeb",
    purple20: "#e0dcf9",
    purple10: "#e2dff6",

    gray70: "#0c2846",
    gray60: "#1e3f6b",
    gray50: "#6b8fbc",
    gray40: "#8fb0d4",
    gray30: "#bed2e8",
    gray20: "#e3ecf5",
    gray10: "#f6f7fa",

    black: "#000",
    white: "#fff",

    // Base
    transparent: "transparent",
    current: "currentColor",
  },
  fontFamily: {
    body: ["'Open Sans'", "'Segoe UI'", "Tahoma", "sans-serif"],
    content: ["'Source Serif Pro'", "Times", "serif"],
  },
  fontSize: {
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",
    48: "48px",
  },
  fontWeight: {
    regular: "400",
    medium: "600",
    bold: "700",
  },
  lineHeight: {
    sm: "1.3",
    md: "1.5",
    lg: "1.7",
  },
  spacing: {
    0: "0",
    4: "4px",
    8: "8px",
    16: "16px",
    24: "24px",
    32: "32px",
    48: "48px",
    64: "64px",
  },
  width: {
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",

    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",

    // Base
    auto: "auto",
    full: "100%",
    screen: "100vw",
  },
  height: {
    16: "16px",
    20: "20px",
    24: "24px",
    32: "32px",

    // Base
    auto: "auto",
    full: "100%",
    screen: "100vh",
  },
  borderWidth: {
    sm: "1px",
    md: "2px",

    // Base
    0: "0",
    default: "1px",
  },
  borderRadius: {
    sm: "2px",
    md: "4px",
    lg: "8px",
    circle: "9999px",

    // Base
    none: "0",
    default: "4px",
  },
  boxShadow: {
    sm: "0 1px 3px 0 rgba(0,0,0,0.15)",
    md: "0 1px 6px 0 rgba(0,0,0,0.1)",
    lg: "0 2px 12px 0 rgba(0,0,0,0.1)",

    // Base
    none: "none",
  },
  opacity: {
    15: 0.15,
    30: 0.3,
    50: 0.5,
    80: 0.8,

    // Base
    0: 0,
    100: 1,
  },
  transitionDuration: {
    300: "300ms",
  },
};

module.exports = theme;
