# Shortcut.js
A Javascript library that lets you trigger events using keyboard shortcuts.

This library is a ES6+ version of [Rick's Shortcuts](https://github.com/rickellis/Shortcuts), I updated it to be used with ES Modules and newer patterns.

## Installing
Download the shortcut file using via wget:

```bash
wget https://raw.githubusercontent.com/VitorGouveia/Shortcut.js/master/shortcuts.js
```

then, just import it into your file:

```js
import { shortcut } from "./shortcuts.js";
```

<br />

## Usage

### Adding Shortcuts

To bind a keyboard shortcut use the `add` function:

```js
shortcut.add('ctrl+shift+m', () => {
    // your code here
})
```

### Bnding to a custom element

To bind a keyboard shortcut to a custom HTML element use the `add` function with a third parameter:

```js
const element = document.querySelector("#container")

shortcut.add('ctrl+shift+m', () => {
    // your code here
}, element)
```

### Removing Shortcuts

To un-bind/remove a keyboard shortcut use the `remove` function:

```js
shortcut.remove('ctrl+shift+m')
```

### Modifier Keys

The following modifier keys are supported:

* cmd (Mac only)
* ctrl
* alt
* shift

<br />

## Examples
see the [example](example.html) for more usage details.

<br />

## Fixes & Improvements

- switch format from IIFE to ESM
- change `var` variables to `const` and `let`
- add types with JSDoc
- remove `keycodes` object for native `event.key` variable
- use object bracket notation to remove `if`'s

<br />

## (original) License

BSD License

Copyright 2018, Rick Ellis

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.