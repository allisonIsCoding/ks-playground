"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("@mdi/react"));
const js_1 = require("@mdi/js");
const GitHub_1 = __importDefault(require("@material-ui/icons/GitHub"));
const LinkedIn_1 = __importDefault(require("@material-ui/icons/LinkedIn"));
const AlternateEmail_1 = __importDefault(require("@material-ui/icons/AlternateEmail"));
const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
    root: {
        width: "100vw",
        height: "20vh",
        padding: "0",
        bottom: "0",
        background: theme.palette.primary.main,
    },
    appBar: {
        maxHeight: "10vh",
        background: theme.palette.secondary.light,
    },
    landingButtons: {
        display: "flex",
        justifyContent: "space-between",
    },
    logo: {
        alignSelf: "flex-start",
        display: "flex",
    },
    button: {
        // margin: "0.5rem 0.5rem 0.5rem /0.5rem",
        color: theme.palette.text.primary,
    },
}));
function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (React.createElement(core_1.BottomNavigation, { value: value, onChange: (event, newValue) => {
            setValue(newValue);
        }, showLabels: true, className: classes.root },
        " ",
        React.createElement(core_1.BottomNavigationAction, { label: "install kafka-socks", value: "npm", href: "https://www.npmjs.com/package/kafka-socks", target: "_blank", rel: "noopener noreferrer", icon: React.createElement(react_1.default, { path: js_1.mdiNpm, size: 2 }) }),
        React.createElement(core_1.BottomNavigationAction, { label: "Github", value: "github", href: "https://github.com/oslabs-beta/Kafkasocks#readme", target: "_blank", rel: "noopener noreferrer", icon: React.createElement(GitHub_1.default, null) }),
        React.createElement(core_1.BottomNavigationAction, { label: "LinkedIn", value: "linkedin", href: "https://linkedin.com/company/kafka-socks", target: "_blank", rel: "noopener noreferrer", icon: React.createElement(LinkedIn_1.default, null) }),
        React.createElement(core_1.BottomNavigationAction, { label: "Contact Us", value: "contactus", href: "mailto:admin@kafka-socks.io", icon: React.createElement(AlternateEmail_1.default, null) })));
}
exports.default = Footer;
