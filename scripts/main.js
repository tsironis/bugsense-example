Bugsense.initAndStartSession({ apiKey: "41d8f1eb" });
console.log('\'Allo \'Allo!');

function iWouldCrash () {
  lalala;
};

function iWouldCrashElegantly() {
  try {
    iAmAHandledException;
  } catch (e) {
    /* handle error */
    BugSense.notify(e);
  }
}

setTimeout(iWouldCrash, 250);
setTimeout(iWouldCrashElegantly, 500);
