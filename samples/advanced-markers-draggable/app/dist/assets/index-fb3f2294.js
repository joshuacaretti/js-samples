(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */async function c(){const{Map:s,InfoWindow:r}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:i}=await google.maps.importLibrary("marker"),o=new s(document.getElementById("map"),{center:{lat:37.39094933041195,lng:-122.02503913145092},zoom:14,mapId:"4504f8b37365c3d0"}),e=new r,t=new i({map:o,position:{lat:37.39094933041195,lng:-122.02503913145092},gmpDraggable:!0,title:"This marker is draggable."});t.addListener("dragend",n=>{const a=t.position;e.close(),e.setContent(`Pin dropped at: ${a.lat()}, ${a.lng()}`),e.open(t.map,t)})}c();
