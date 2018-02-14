(function() {
  var LIB_OBJ = {};
  var Int_JsUtils = [];
  var Int_CssUtils = [];
  var Ext_JsUtils = [
    "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
    "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
    "https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"
  ];
  var Ext_CssUtils = [
    "https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css",
    "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css",
  ];

  LIB_OBJ.INTJS.push(Int_JsUtils);
  LIB_OBJ.CDNJS.push(Ext_JsUtils);

  LIB_OBJ.INTCSS.push(Int_CssUtils);
  LIB_OBJ.CDNCSS.push(Ext_CssUtils);
  var JSList = "";
  if (LIB_OBJ.INTJS.length > 0) {
    for (var i = 0; LIB_OBJ.INTJS.length; i++) {
      JSList += "<script type=\"text/javascript\" src=\"../../" + LIB_OBJ.INTJS[i] + "\" charset=\"utf-8\"></script>";
    }
  }

  if (LIB_OBJ.CDNJS.length > 0) {
    for (var i = 0; LIB_OBJ.CDNJS.length; i++) {
      JSList += "<script type=\"text/javascript\" src=\"" + LIB_OBJ.CDNJS[i] + "\" charset=\"utf-8\"></script>";
    }
  }

  if (LIB_OBJ.INTCSS.length > 0){
    for (var i=0; LIB_OBJ.INTCSS.length; i++){
      JSList += "<link type=\"text/css\" rel=\"stylesheet\" href=\"../../" + LIB_OBJ.INTCSS[i]+"\"></script>";
    }
  }

  if (LIB_OBJ.CDNCSS.length > 0) {
    for (var i = 0; LIB_OBJ.CDNCSS.length; i++) {
      JSList += "<link type=\"text/css\" rel=\"stylesheet\" href=\""+ LIB_OBJ.INTCSS[i]+"\"></script>";
    }
  }

  document.write(JSList);
})();
