
if (typeof gdjs.evtsExt__ExplosionForce__ApplyExplosionForce !== "undefined") {
  gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce = {};
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachIndex2 = 0;

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachObjects2 = [];

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachTemporary2 = null;

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachTotalCount2 = 0;

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects1= [];
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects2= [];
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3= [];
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4= [];
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects5= [];


gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3, gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).isDynamic()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[k] = gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4 */
{for(var i = 0, len = gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).setDynamic();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3, gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].setVariableBoolean(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].getVariables().get("__ExplosionForce").getChild("Exploded"), true);
}
}{for(var i = 0, len = gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].returnVariable(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].getVariables().get("__ExplosionForce").getChild("Angle")).setNumber(180 + (gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].getAngleToPosition(eventsFunctionContext.getArgument("ExplosionCenterX"), eventsFunctionContext.getArgument("ExplosionCenterY"))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3, gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].returnVariable(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].getVariables().get("__ExplosionForce").getChild("Magnitude")).setNumber((eventsFunctionContext.getArgument("MaxForce") * (eventsFunctionContext.getArgument("ExplosionRadius") - gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].getCenterXInScene()), (gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4[i].getCenterYInScene()), eventsFunctionContext.getArgument("ExplosionCenterX"), eventsFunctionContext.getArgument("ExplosionCenterY"))) / eventsFunctionContext.getArgument("ExplosionRadius")));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).applyPolarForce((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3[i].getVariables().get("__ExplosionForce").getChild("Angle"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3[i].getVariables().get("__ExplosionForce").getChild("Magnitude"))), (gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).getMassCenterX()), (gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).getMassCenterY()));
}
}}

}


};gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects2, gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3[0].getAABBCenterX()), (( gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3[0].getAABBCenterY()), eventsFunctionContext.getArgument("ExplosionCenterX"), eventsFunctionContext.getArgument("ExplosionCenterY")) < eventsFunctionContext.getArgument("ExplosionRadius"));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TargetObject"), gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects1);

for (gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachIndex2 = 0;gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachIndex2 < gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects1.length;++gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachIndex2) {
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects2.length = 0;


gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachTemporary2 = gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects1[gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachIndex2];
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects2.push(gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.func = function(runtimeScene, TargetObject, Behavior, ExplosionCenterX, ExplosionCenterY, MaxForce, ExplosionRadius, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"TargetObject": TargetObject
},
  _objectArraysMap: {
"TargetObject": gdjs.objectsListsToArray(TargetObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ExplosionForce"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ExplosionForce"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ExplosionCenterX") return ExplosionCenterX;
if (argName === "ExplosionCenterY") return ExplosionCenterY;
if (argName === "MaxForce") return MaxForce;
if (argName === "ExplosionRadius") return ExplosionRadius;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects2.length = 0;
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3.length = 0;
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4.length = 0;
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects5.length = 0;

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects2.length = 0;
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects3.length = 0;
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects4.length = 0;
gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.GDTargetObjectObjects5.length = 0;


return;
}

gdjs.evtsExt__ExplosionForce__ApplyExplosionForce.registeredGdjsCallbacks = [];