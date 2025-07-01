const FONT_PRIMARY = "Pretendard Variable";

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 19}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const typography = {
  fontFamily: FONT_PRIMARY,
  // fontWeightRegular: 400,
  // fontWeightMedium: 600,
  // fontWeightBold: 700,
  title: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(25),
  },
  subtitle: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
  },
  caption: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
  },
  sub: {
    fontWeight: 400,
    lineHeight: "normal",
    color: "#747474",
    fontSize: pxToRem(15),
  },
  support: {
    fontSize: pxToRem(12),
    fontWeight: 600,
  },
  unit: {
    color: "#8E8E8E",
    fontSize: pxToRem(20),
    fontWeight: 700,
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 600,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;
