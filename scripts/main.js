Bugsense.initAndStartSession({ apiKey: "41d8f1eb" });
console.log('\'Allo \'Allo!');

function iWouldCrash () {
  lalala;
};

setTimeout(iWouldCrash, 250);
