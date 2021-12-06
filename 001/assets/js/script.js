$(document).ready(function () {
  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
  });

  //methods
  fullpage_api.setAllowScrolling(true);

  new TypeIt("#text_page1", {
    strings: ["Anu.. hmm.. Lanjut scroll aja deh >//<"],
    speed: 80,
    lifeLike: true,
  }).go();
});
