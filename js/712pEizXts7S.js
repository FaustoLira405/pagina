document.addEventListener("DOMContentLoaded",(function(){var t=0,e=[],a=!1,r=document.querySelectorAll(CLASS_TO_DISPLAY),n="alreadyElsDisplayed"+SECONDS_TO_DISPLAY,o=null;try{o=localStorage.getItem(n)}catch(t){console.warn("Failed to read data from localStorage: ",t)}setTimeout((function(){(e=Array.prototype.slice.call(r)).forEach((t=>t.style.setProperty("display","none","important")))}),0);var l=function(){a=!0,e.forEach((t=>t.style.setProperty("display","block","important")));try{localStorage.setItem(n,!0)}catch(t){console.warn("Failed to save data in localStorage: ",t)}},s=function(){if("undefined"==typeof smartplayer||!smartplayer.instances||!smartplayer.instances.length){if(t>=10)return;return t+=1,setTimeout((function(){s()}),1e3)}smartplayer.instances[0].on("timeupdate",(()=>{a||smartplayer.instances[0].smartAutoPlay||smartplayer.instances[0].video.currentTime<SECONDS_TO_DISPLAY||l()}))};"true"===o?setTimeout((function(){l()}),100):s()}));