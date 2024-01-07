// ==UserScript==
// @name         Youtube Music no video player
// @namespace    http://tampermonkey.net/
// @version      2024-01-07
// @description  Remove youtube music player and make it truely a music player.
// @author       pankaj4u4m@gmail.com
// @match        *://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=music.youtube.com
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Your code here...
    console.log("Making player disappear");
    document.getElementById("main-panel").style.display="none";
})();
