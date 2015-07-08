/**
 * Created by diana.domut on 7/7/2015.
 */
(function () {

  "use strict";


  $(document).ready(function () {
    $("menu").on("submit", function () {
      alert("not implemented");
      return false;
    });
  });


  var dog = new Animal();
  dog.name = "Lucky";
  dog.legCount= 3;
  dog.feed("Lamb");

  var toInsert = "<div>\n  <ul>\n    <li>Lorem ipsum</li>\n    <li></li>\n    <li></li></ul>\n</div>";
  var toExecute = 'var x=0;';

})();
