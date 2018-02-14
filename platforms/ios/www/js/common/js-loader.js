(function() {
  var LIB_OBJ = {};
  var Int_JsUtils = [

  ];
  var Int_CssUtils = [
    "css/common.css"
  ];
  var Ext_JsUtils = [
    "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js",
    "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
    //"https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js" //아이폰 X 에서 노츠부분이 충돌남..
  ];
  var Ext_CssUtils = [
    "https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css",
    "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css",
  ];

  LIB_OBJ.INTJS = Int_JsUtils;
  LIB_OBJ.CDNJS = Ext_JsUtils;

  LIB_OBJ.INTCSS = Int_CssUtils;
  LIB_OBJ.CDNCSS = Ext_CssUtils;
  var JSList = "";

  if (LIB_OBJ.INTCSS.length > 0) {
    for (var i = 0; i<LIB_OBJ.INTCSS.length; i++) {
      JSList += "<link type=\"text/css\" rel=\"stylesheet\" href=\"../../" + LIB_OBJ.INTCSS[i] + "\"></script>";
    }
  }

  if (LIB_OBJ.CDNCSS.length > 0) {
    for (var i = 0; i<LIB_OBJ.CDNCSS.length; i++) {
      JSList += "<link type=\"text/css\" rel=\"stylesheet\" href=\"" + LIB_OBJ.CDNCSS[i] + "\"></script>";
    }
  }

  if (LIB_OBJ.INTJS.length > 0) {
    for (var i = 0; i<LIB_OBJ.INTJS.length; i++) {
      JSList += "<script type=\"text/javascript\" src=\"../../" + LIB_OBJ.INTJS[i] + "\" charset=\"utf-8\"></script>";
    }
  }

  if (LIB_OBJ.CDNJS.length > 0) {
    for (var i = 0; i<LIB_OBJ.CDNJS.length; i++) {
      JSList += "<script type=\"text/javascript\" src=\"" + LIB_OBJ.CDNJS[i] + "\" charset=\"utf-8\"></script>";
    }
  }
  document.write(JSList);
})();
