"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
var theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            light: '#E1E5F2',
            main: '#BFDBF7',
            dark: '#022B3A',
            contrastText: '#f5f5f5'
        },
        secondary: {
            light: '#ffffff',
            main: '#1F7A8C',
            dark: '#115363',
            contrastText: '#f5f5f5'
        },
        background: {
            "default": 'f5f5f5'
        },
        text: {
            primary: '#404040',
            secondary: '#f5f5f5',
            // secondary: '#696969',
            disabled: '#696969',
            hint: '#a3a3a3'
        }
    },
    typography: {
        fontSize: 14,
        fontFamily: ['Montserrat'].join(',')
    }
});
exports["default"] = theme;
