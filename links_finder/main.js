console.log("console testing");

let str = "youtube"; //this is text that we find in all given links
let mylink = document.links;
let href;
//using for each loop we iterate all document links and apply if condiion
Array.from(mylink).forEach(function (element) {
  href = element.href;
  //.inculdes method find requird string in links iteration if its tru which print links in console
  if (href.includes(str))
    console.log(href);

});
