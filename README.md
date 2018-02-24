# Shortcuts
A Javascript library that lets you trigger events using keyboard shortcuts.

This library is a rewritten and simplified version of [this library](http://www.openjs.com/scripts/events/keyboard_shortcuts/shortcut.js). I was trying to use the original on an Electron project but ran into a number of problems, so I deconstructed it and wrote my own version. It contains about half the lines of code, and comes wrapped in an [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression).

### Usage Examples
After cloning the library, load __test.html__ in your browser to see a few usage examples.

### Adding Shortcuts

To add a keyboard shortcut use:

    shortcuts.add('ctrl+shift+m',function() {
        myFunction()
    })

In the above example we are assigning the __control shift m__ keys to a function called `myFunction`.

You can optionally pass a DOM element via the third parameter in order to attach a shortcut to a specific object:

    var element = document.getElementById('myid')

    shortcuts.add('ctrl+shift+m',function() {
        myFunction()
    }, element)

### Removing Shortcuts

To remove a keyboard shortcut use:

    shortcuts.remove('ctrl+shift+m')

### Modifier Keys

The following modifier keys are supported:

* cmd (Mac only)
* ctrl
* alt
* shift

### License

BSD License

Copyright 2018, Rick Ellis

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.