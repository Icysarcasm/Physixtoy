gdjs.PrefaceCode = {};
gdjs.PrefaceCode.localVariables = [];
gdjs.PrefaceCode.GDPRefracetitleObjects1= [];
gdjs.PrefaceCode.GDPRefracetitleObjects2= [];
gdjs.PrefaceCode.GDprefacesplashObjects1= [];
gdjs.PrefaceCode.GDprefacesplashObjects2= [];
gdjs.PrefaceCode.GDPRefracetitle2Objects1= [];
gdjs.PrefaceCode.GDPRefracetitle2Objects2= [];
gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.PrefaceCode.GDSquareWhiteToggleObjects1= [];
gdjs.PrefaceCode.GDSquareWhiteToggleObjects2= [];
gdjs.PrefaceCode.GDprefacesplash2Objects1= [];
gdjs.PrefaceCode.GDprefacesplash2Objects2= [];


gdjs.PrefaceCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.PrefaceCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrefaceCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.PrefaceCode.GDSquareWhiteToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PrefaceCode.GDSquareWhiteToggleObjects1[k] = gdjs.PrefaceCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.PrefaceCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.PrefaceCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrefaceCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( !(gdjs.PrefaceCode.GDSquareWhiteToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.PrefaceCode.GDSquareWhiteToggleObjects1[k] = gdjs.PrefaceCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.PrefaceCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", true);
}}

}


};

gdjs.PrefaceCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PrefaceCode.GDPRefracetitleObjects1.length = 0;
gdjs.PrefaceCode.GDPRefracetitleObjects2.length = 0;
gdjs.PrefaceCode.GDprefacesplashObjects1.length = 0;
gdjs.PrefaceCode.GDprefacesplashObjects2.length = 0;
gdjs.PrefaceCode.GDPRefracetitle2Objects1.length = 0;
gdjs.PrefaceCode.GDPRefracetitle2Objects2.length = 0;
gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.PrefaceCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.PrefaceCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.PrefaceCode.GDprefacesplash2Objects1.length = 0;
gdjs.PrefaceCode.GDprefacesplash2Objects2.length = 0;

gdjs.PrefaceCode.eventsList0(runtimeScene);
gdjs.PrefaceCode.GDPRefracetitleObjects1.length = 0;
gdjs.PrefaceCode.GDPRefracetitleObjects2.length = 0;
gdjs.PrefaceCode.GDprefacesplashObjects1.length = 0;
gdjs.PrefaceCode.GDprefacesplashObjects2.length = 0;
gdjs.PrefaceCode.GDPRefracetitle2Objects1.length = 0;
gdjs.PrefaceCode.GDPRefracetitle2Objects2.length = 0;
gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.PrefaceCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.PrefaceCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.PrefaceCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.PrefaceCode.GDprefacesplash2Objects1.length = 0;
gdjs.PrefaceCode.GDprefacesplash2Objects2.length = 0;


return;

}

gdjs['PrefaceCode'] = gdjs.PrefaceCode;
