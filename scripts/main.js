Bugsense.initAndStartSession({ apiKey: "41d8f1eb" });
console.log('\'Allo \'Allo!');

function iWouldCrash () {
  var hey = "123123";
  if(hey) {
    lalala--;
  } else {
    lalala++;
    lalala2++;
    lalala++;
    lalala1++;
    lalala++;
  }

};
function toCelcius(f) {
    return (5/9) * (f-32);
}

setTimeout(iWouldCrash, 250);
