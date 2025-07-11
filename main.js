// ==UserScript==
// @name         pvprp.com skipper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  automatically "subscribes" to the channel unlocking the download button
// @author       You
// @match        https://pvprp.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('load', function () {
        setTimeout(() => {
            const button = document.querySelector('a.button-shared.button-main.activ-download[href*="youtube.com"]');
            if (button) {
                button.removeAttribute('href');
                button.removeAttribute('target');
                button.style.cursor = 'pointer';
                button.click();
            }
        }, 1000);
    });
})();
