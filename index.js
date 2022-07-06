// @ts-check
"use strict";

import { shortcut } from "./shortcuts.js"

/**
 * @type {HTMLButtonElement | null}
 */
const button = document.querySelector("#unregister")

/** @type {HTMLDivElement | null} */
const box = document.querySelector("#box")

/**
 * @type {HTMLSpanElement | null}
 */
const registeredSpan = document.querySelector("div span")

if(!button || !box || !registeredSpan) {
  throw new Error("Elements don't exist? How? HOW?")
}

let registered = true

button.addEventListener("click", () => {
  if(registered) {
    registeredSpan.textContent = "unregistered"
    button.textContent = "register ctrl + enter"
    shortcut.remove("ctrl+enter")
  } else {
    registeredSpan.textContent = "registered"
    button.textContent = "unregister ctrl + enter"
    shortcut.add('ctrl+enter', () => {
      alert('You pressed ctrl+enter')
    })
  }
  
  registered = !registered
})

/**
 * default add usage
 */
shortcut.add('ctrl+enter', () => {
  alert('You pressed ctrl+enter')
})

/**
 * usage with custom element
 */
shortcut.add('ctrl+enter', () => {
  alert('You pressed ctrl+enter targeting the box!')
}, box)

/**
 * usage with custom element
 */
shortcut.add('ctrl+enter', () => {
  alert('You pressed ctrl+enter targeting the box!')
}, box)

shortcut.add('ctrl+y', () => {
  box.style.background = "#7159c1";
})