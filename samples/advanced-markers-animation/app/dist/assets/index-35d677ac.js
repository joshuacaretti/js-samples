(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */function l(r){const n=r.getBounds(),s=n.getSouthWest().lat(),o=n.getSouthWest().lng(),e=n.getNorthEast().lat(),t=n.getNorthEast().lng(),a=e-s;let i=t-o;return t<o&&(i+=360),{lat:s+Math.random()*a,lng:o+Math.random()*i}}const c=new IntersectionObserver(r=>{for(const n of r)n.isIntersecting&&(n.target.classList.add("drop"),c.unobserve(n.target))});async function d(){const{Map:r}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:n}=await google.maps.importLibrary("marker"),{LatLng:s}=await google.maps.importLibrary("core"),o=new s(37.4242011827985,-122.09242296450893),e=new r(document.getElementById("map"),{zoom:14,center:o,mapId:"4504f8b37365c3d0"});google.maps.event.addListenerOnce(e,"idle",()=>{for(let i=0;i<100;i++)m(e,n)});const t=document.createElement("div"),a=document.createElement("button");a.classList.add("ui-button"),a.innerText="Reset the example",a.addEventListener("click",()=>{p()}),t.appendChild(a),e.controls[google.maps.ControlPosition.TOP_CENTER].push(t)}function m(r,n){const o=new n({position:l(r),map:r}).content;o.style.opacity="0",o.addEventListener("animationend",t=>{o.classList.remove("drop"),o.style.opacity="1"});const e=2+Math.random();o.style.setProperty("--delay-time",e+"s"),c.observe(o)}function p(){const r=document.getElementById("mapContainer");document.getElementById("map").remove();const s=document.createElement("div");s.id="map",r.appendChild(s),d()}d();
