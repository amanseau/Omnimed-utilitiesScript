// ==UserScript==
// @name         Join Meet
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        https://meet.google.com/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @require      file:///home/devjava/eventInfo.js
// @grant        window.close
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var currentState = 1;
var botLigthUrl = "";
var timeout = endDate.getTime() - new Date().getTime();

if (timeout < 0) {
    timeout = 1;
}

$(document).ready(function() {
    console.log(timeout);
    setTimeout(function() {
        if ($('input').length == 0 && $(".Y5sE8d[role='button']").length > 0) {
            $(".Y5sE8d[role='button']").click();
        } else if ($(".sYZaLe[role='button']").length > 0) {
            $(".sYZaLe[role='button']").click();
        }
    }, 20000);
    setTimeout(function() {
        setInterval(function(){
            if (parseInt($(".wnPUne.N0PJ8e")[0].innerText) < 2) {
                if (botLigthUrl !== "") {
                    GM_xmlhttpRequest({
                        method: "GET",
                        url: botLigthUrl + "/off",
                        onload: function(res) {
                            window.close();
                        }
                    });
                } else {
                    window.close();
                }
            }
        }, 300);
    }, timeout);
    if (botLigthUrl !== "") {
        setInterval(function(){
            if (parseInt($(".wnPUne.N0PJ8e")[0].innerText) < 2) {
                if (currentState != 0) {
                    console.log("OFF");
                    currentState = 0;
                    GM_xmlhttpRequest({
                        method: "GET",
                        url: botLigthUrl + "/off",
                        onload: function(res) {
                            currentState = 0;
                        }
                    });
                }
            } else {
                if (currentState != 1) {
                    console.log("ON");
                    currentState = 1;
                    GM_xmlhttpRequest({
                        method: "GET",
                        url: botLigthUrl + "/on",
                        onload: function(res) {
                            currentState = 1;
                        }
                    });
                }
            }
        }, 300);
    }
});
