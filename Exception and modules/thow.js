// throw
//return and print 

let num = 10;
try {
  if (num == 10) {
  console.log("same");
  }
  if (num > 10) throw "Larger";
  if (num < 10) throw "Smaller";
} catch (e) {
  console.log(e);

  console.log("Error hai");
}
