(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */let a,c={lat:37.4161493,lng:-122.0812166};async function l(){const{Map:r}=await google.maps.importLibrary("maps"),{Place:o}=await google.maps.importLibrary("places"),{AdvancedMarkerElement:s}=await google.maps.importLibrary("marker");a=new r(document.getElementById("map"),{center:c,zoom:14,mapId:"4504f8b37365c3d0"}),d(s,o),f(o)}async function d(r,o){const s={query:"Sports Page",fields:["displayName","location"],locationBias:c},{places:n}=await o.findPlaceFromQuery(s);if(n.length){const e=n[0],t=e.location;new r({map:a,position:e.location,title:e.displayName}),a.setCenter(t)}else console.log("No results")}async function f(r){const o=new r({id:"ChIJN1t_tDeuEmsRUsoyG83frY4",requestedLanguage:"en"});await o.fetchFields({fields:["displayName","formattedAddress"]}),console.log(o.displayName),console.log(o.formattedAddress)}l();
