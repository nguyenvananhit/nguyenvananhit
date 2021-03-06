const CONTENT_ELEMENT = document.getElementById("body-content");
const MAIN_ELEMENT = document.getElementById("main-content");

var listMapLayout = [
    {
        id: "headerElemet",
        name: 'HEADER',
        position: 'header',
        content: "",
        done: false
    },
    {
        id: "footerElemet",
        name: 'FOOTER',
        position: 'footer',
        content: "",
        done: false
    }
];

var listJavascriptLoad = [
    "./layout/app.js"
];
const THEME_LAYOUT_APP = new ThemeLayout(listMapLayout, listJavascriptLoad, CONTENT_ELEMENT);