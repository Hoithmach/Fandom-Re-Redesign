// ==UserScript==
// @name         Fandom Re-Redesign
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adjusts Fandom's layout
// @author       Hoithmach
// @match        https://*.fandom.com/wiki/*
// @icon         https://www.fandom.com/f2/assets/favicons/favicon-32x32.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("global-navigation")[0].remove();
    document.getElementsByClassName("page__right-rail")[0].remove();
    document.getElementsByClassName("page-side-tools")[0].remove()
    document.getElementById("WikiaBar").remove()
    document.getElementsByClassName("banner-notifications-placeholder")[0].remove()

    try {
        document.getElementsByClassName("mcf-wrapper")[0].remove()
    }
    catch(err) {};

    GM_addStyle(
        `.main-container { margin-left : 0px !important; width : 100% !important; }` +
        `.resizable-container { width : 95% !important; max-width : none !important; }` +
        `.fandom-sticky-header { left : 0px !important; }` +
        `.wikitable { box-sizing : inherit !important; }` // Stops resizing issue
    );

})();
