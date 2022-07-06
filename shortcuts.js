"use strict";
// @ts-check

export const shortcut = {
  eventType: "keydown",
  eventTracker: [],
  shortcutExists: [],
  /**
   * @param {string} shortcut
   * @param {() => void} callback
   * @param {HTMLElement | undefined} DOMTarget
   */
  add(shortcut, callback, DOMTarget = window) {
    // Prevents multiple additions of the same shortcut
    if (this.shortcutExists[shortcut] === true) {
      return;
    }

    /**
     *
     * @param {KeyboardEvent} event
     */
    const keyTracker = (event) => {
      var metaWanted = {
        cmd: false,
        ctrl: false,
        shift: false,
        alt: false,
      };

      var metaPressed = {
        cmd: event.metaKey,
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
      };

      const shortcuts = shortcut.split("+");

      let matches = 0;

      for (let index = 0; index < shortcuts.length; index++) {
        if (shortcuts[index] in metaWanted) {
          metaWanted[shortcuts[index]] = true;
          matches++;
        } else {
          if (shortcuts[index] === event.key.toLowerCase()) {
            matches++;
          }
        }
      }

      // If we have matched the shortcut we issue the callback
      if (
        matches === shortcuts.length &&
        metaWanted["cmd"] === metaPressed["cmd"] &&
        metaWanted["ctrl"] === metaPressed["ctrl"] &&
        metaWanted["shift"] === metaPressed["shift"] &&
        metaWanted["alt"] === metaPressed["alt"]
      ) {
        callback();
      }
    };

    // Add the event listener
    // @ts-ignore
    DOMTarget.addEventListener(this.eventType, keyTracker);

    // Cache the event data so it can be removed later
    this.eventTracker[shortcut] = { element: DOMTarget, callback: keyTracker };

    this.shortcutExists[shortcut] = true;
  },
  /**
   * @param {string} shortcut
   */
  remove(shortcut) {
    shortcut = shortcut.toLowerCase();

    if (this.eventTracker[shortcut]) {
      const element = this.eventTracker[shortcut]["element"];
      const callback = this.eventTracker[shortcut]["callback"];

      element.removeEventListener(this.eventType, callback, false);

      delete this.eventTracker[shortcut];
      this.shortcutExists[shortcut] = false;
    }
  },
};
