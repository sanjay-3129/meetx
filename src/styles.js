import {StyleSheet} from 'react-native';

// colors.js
export const primary = {
  P50: '#f3edfb',
  P75: '#ceb5ed',
  P100: '#ba97e5',
  P200: '#9c6ada',
  P300: '#884bd2',
  P400: '#5f3593',
  P500: '#532e80',
};

export const secondary = {
  S50: '#fdf2e6',
  S75: '#f8ca99',
  S100: '#f5b46e',
  S200: '#f19430',
  S300: '#ee7e05',
  S400: '#a75804',
  S500: '##914d03',
};

export const black = {
  B50: '#e7e6e7',
  B75: '#9b999e',
  B100: '#716e76',
  B200: '#34303b',
  B300: '#0b0513',
  B400: '#08040d',
  B500: '#07030c',
};

export const white = {
  W50: '#fefefe',
  W75: '#fafafa',
  W100: '#f8f8f8',
  W200: '#f5f5f5',
  W300: '#f3f3f3',
  W400: '#aaaaaa',
  W500: '#949494',
};

export const neutral = {
  N0: '#fefefe',
  N10: '#fdfdfd',
  N20: '#fbfbfb',
  N30: '#f7f7f7',
  N40: '#f2f2f2',
  N50: '#e7e7e7',
  N60: '#e1e1e1',
  N70: '#dcdcdc',
  N80: '#d6d6d6',
  N90: '#d0d0d0',
  N100: '#cbcbcb',
  N200: '#c5c5c5',
  N300: '#bfbfbf',
  N400: '#bababa',
  N500: '#b4b4b4',
  N600: '#afafaf',
  N700: '#a9a9a9',
  N800: '#a3a3a3',
  N900: '#9e9e9e',
};

export const darkHeader = {
  DH50: '#e7e6ea',
  DH100: '#b6b1bc',
  DH200: '#928b9c',
  DH300: '#61556f',
  DH400: '#423553',
  DH500: '#130228',
  DH600: '#110224',
  DH700: '#0d011c',
  DH800: '#0a0116',
  DH900: '#080111',
};

//font Styles
export const fontStyles = StyleSheet.create({
  //XSmall
  xsmallRegular: {
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  xsmallBold: {
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  xsmallItalic: {
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Small
  smallRegular: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  smallBold: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  smallItalic: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Base
  baseRegular: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  baseBold: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  baseItalic: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Large
  largeRegular: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  largeBold: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  largeItalic: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Heading 6
  H6Regular: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  H6Bold: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  H6Italic: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Heading 5
  H5Regular: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  H5Bold: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  H5Italic: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Heading 4
  H4Regular: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  H4Bold: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  H4Italic: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Heading 3
  H3Regular: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  H3Bold: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  H3Italic: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Heading 2
  H2Regular: {
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  H2Bold: {
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  H2Italic: {
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },

  //Heading 1
  H1Regular: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  H1Bold: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  H1Italic: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
});
