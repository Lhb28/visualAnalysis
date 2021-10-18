import BasicUICreatorFactory from '../BasicUICreatorFactory.js';
import init_plugin_visual from './visual_helper.js';
var style;
(function() {
    const VISUALANALYSIS_STYLE_ID = 'visualanalysisStyle';
    const oldStyle = document.getElementById(VISUALANALYSIS_STYLE_ID);
    if (!oldStyle) {
        style = document.createElement('style');
        style.id = VISUALANALYSIS_STYLE_ID;
        document.head.appendChild(style);
    }
})();

function PointDetectionStyle() {
    style.innerHTML = `
    #DetectionContainer {
        position: fixed;
        width: 300px;
        height: 300px;
        top: 100px;
        right: 50px;
        background-color: rgba(255, 255, 255, 0.5); 
    }
    
    .title{
        width:100%;
        height:40px;
        text-align:center;
        line-height:40px;
    }

    .ParamsContainer {
        width: 100%;
        height: 250px;
        position: absolute;
        top: 40px;
    }
    
    .Params1 {
        width: 100%;
        height: 50%;
        display: flex;
        position: absolute;
    }
    
    .Params2 {
        width: 100%;
        height: 50%;
        display: flex;
        position: absolute;
        box-sizing:border-box;
        top:50%;
    }

    .ParamsName1 {
        display: inline-block;
        width: 32%;
        height: 100%;
        padding: 7px 0px 0px 10px;
        box-sizing: border-box;
        position: absolute;
    }

    .ParamsName2 {
        display: inline-block;
        width: 32%;
        height: 100%;
        padding: 7px 0px 0px 10px;
        box-sizing: border-box;
        position: absolute;
    }

    .startPointParamsValue {
        display: inline-block;
        width: 68%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        left:32%;
    }

    .endPointParamsValue {
        display: inline-block;
        width: 68%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        left:32%;
    }

    .XContainer{
        width:100%;
        height:33%;
    }

    .YContainer{
        width:100%;
        height:33%;
    }

    .ZContainer{
        width:100%;
        height:33%;
    }

    .startPointParamsValue span {
        display: inline-block;
        margin: 10px 4px 8px 0px
    }

    .startPointParamsValue input{
        display: inline-block;
        width: 153px;
        height: 25px;
    }
    
    .endPointParamsValue span {
        display: inline-block;
        margin: 10px 4px 8px 0px
    }

    .endPointParamsValue input{
        display: inline-block;
        width: 153px;
        height: 25px;
    }`;
}

function PlaneDetectionStyle() {
    style.innerHTML = `
    #DetectionContainer {
        position: fixed;
        width: 300px;
        height: 220px;
        top: 100px;
        right: 50px;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .title{
        width:100%;
        height:40px;
        text-align:center;
        line-height:40px;
    }
    
    .ParamsContainer {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 40px;
    }

    .Params1 {
        width: 100%;
        height: 22%;
        display: flex;
        position: absolute;
    }
    
    .Params2 {
        width: 100%;
        height: 60%;
        display: flex;
        position: absolute;
        box-sizing:border-box;
        top: 22%;
    }

    .ParamsName1 {
        display: inline-block;
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 0px 0px 10px;
        position: absolute;
    }

    .ParamsName2 {
        display: inline-block;
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 0px 0px 10px;
        position: absolute;
    }

    .radiusValue{
        display: inline-block;
        width: 60%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        left:40%;
    }

    .radiusValue input{
        display:inline-block;
        width: 153px;
        height: 25px;
        position: absolute;
        top: 0px;
        bottom: 0px;
        margin: auto 0px;
    }
    
    .endPointParamsValue {
        display: inline-block;
        width: 65%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        left:35%;
    }

    .XContainer{
        width:100%;
        height:33%;
    }

    .YContainer{
        width:100%;
        height:33%;
    }

    .ZContainer{
        width:100%;
        height:33%;
    }
    
    .endPointParamsValue span {
        display: inline-block;
        margin: 10px 4px 8px 0px
    }

    .endPointParamsValue input{
        display: inline-block;
        width: 153px;
        height: 25px;
    }`;
}

function SpaceDetectionStyle() {
    style.innerHTML = `
    #DetectionContainer {
        position: fixed;
        width: 300px;
        height: 220px;
        top: 100px;
        right: 50px;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .title{
        width:100%;
        height:40px;
        text-align:center;
        line-height:40px;
    }
    
    .ParamsContainer {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 40px;
    }

    .Params1 {
        width: 100%;
        height: 22%;
        display: flex;
        position: absolute;
    }
    
    .Params2 {
        width: 100%;
        height: 60%;
        display: flex;
        position: absolute;
        box-sizing:border-box;
        top: 22%;
    }

    .ParamsName1 {
        display: inline-block;
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 0px 0px 10px;
        position: absolute;
    }

    .ParamsName2 {
        display: inline-block;
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 0px 0px 10px;
        position: absolute;
    }

    .radiusValue{
        display: inline-block;
        width: 60%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        left:40%;
    }

    .radiusValue input{
        display:inline-block;
        width: 153px;
        height: 25px;
        position: absolute;
        top: 0px;
        bottom: 0px;
        margin: auto 0px;
    }
    
    .endPointParamsValue {
        display: inline-block;
        width: 65%;
        height: 100%;
        box-sizing: border-box;
        position: absolute;
        left:35%;
    }

    .XContainer{
        width:100%;
        height:33%;
    }

    .YContainer{
        width:100%;
        height:33%;
    }

    .ZContainer{
        width:100%;
        height:33%;
    }
    
    .endPointParamsValue span {
        display: inline-block;
        margin: 10px 4px 8px 0px
    }

    .endPointParamsValue input{
        display: inline-block;
        width: 153px;
        height: 25px;
    }`;
}

function initVisual() {
    let DialogUI = BasicUICreatorFactory.Create('Visual');
    const DATA = {
        plug_area: init_plugin_visual(DialogUI),
        type: '',
        i: 36,
        clickNumber: 0,
        startPointX: 0,
        startPointY: 0,
        startPointZ: 0,
        endPointX: 0,
        endPointY: 0,
        endPointZ: 0,
        rcolor: 0,
        gcolor: 255,
        bcolor: 0,
        alpha: 170,
        wholeRcolor: 255,
        wholeGcolor: 0,
        wholeBcolor: 0,
        wholeAlpha: 50,
        visibleGroundRcolor: 255,
        visibleGroundGcolor: 255,
        visibleGroundBcolor: 0,
        visibleGroundAlpha: 100,
        pointArr: [],
        radius: 0,
        angle: 10,
        length: 0,
        startPoint: {
            x: 0,
            y: 0,
            z: 0
        },
        intersectionPoint: {
            x: 0,
            y: 0,
            z: 0
        },
        hCenterEndPoint: {
            x: 0,
            y: 0,
            z: 0
        },
        hCenterIntersectionPoint: {
            x: 0,
            y: 0,
            z: 0
        },
        EndPointArr: [],
        intersectionPointArr: [],
        SpaceIntersectsArr: [],
        BottomPlaneIntersectionPoint: [],
    };
    const bt_Util = (window as any).bt_Util;
    const bt_event = (window as any).bt_event;
    const bt_Plug_Annotation = (window as any).bt_Plug_Annotation;
    const METHOD = {
        // 可视点检测：鼠标点击确定起点终点坐标
        StartRadiusDetection: function(ep) {
            let clickPoint;
            if (ep[0] === 0) {
                let x = ep[1];
                let y = ep[2];
                clickPoint = bt_Util.screenToWorld(x, y);
                let point = {
                    x: clickPoint.x,
                    y: clickPoint.y,
                    z: clickPoint.z
                };
                if (DATA.pointArr.length < 1) {
                    DATA.pointArr.push(point);
                    DATA.startPointX = DATA.pointArr[0].x;
                    DATA.startPointY = DATA.pointArr[0].y;
                    DATA.startPointZ = DATA.pointArr[0].z;
                    bt_Plug_Annotation.setAnnotation("a1", DATA.startPointX, DATA.startPointY, DATA.startPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "起点" + "</span></div>", false, 10, 1000);
                } else if (DATA.pointArr.length == 1) {
                    DATA.pointArr.push(point);
                    DATA.endPointX = DATA.pointArr[1].x;
                    DATA.endPointY = DATA.pointArr[1].y;
                    DATA.endPointZ = DATA.pointArr[1].z;
                    DialogUI.getParameterInputUI("exvalue").setVal(DATA.endPointX);
                    DialogUI.getParameterInputUI("eyvalue").setVal(DATA.endPointY);
                    DialogUI.getParameterInputUI("ezvalue").setVal(DATA.endPointZ);
                    bt_Plug_Annotation.setAnnotation("a2", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "终点" + "</span></div>", false, 10, 1000);
                    DATA.intersectionPoint = bt_Util.lineIntersect(DATA.pointArr[0].x, DATA.pointArr[0].y, DATA.pointArr[0].z, DATA.pointArr[1].x, DATA.pointArr[1].y, DATA.pointArr[1].z);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj StartIntersectLine 4 1 0 0 0 8 2 2 ${DATA.pointArr[0].x} ${DATA.pointArr[0].y} ${DATA.pointArr[0].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 0;`);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj IntersectEndPointLine 4 1 0 0 0 8 2 2 ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.pointArr[1].x} ${DATA.pointArr[1].y} ${DATA.pointArr[1].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 0;`);
                    bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
                } else if (DATA.pointArr.length == 2) {
                    METHOD.ClearVisibleLineSegment();
                    bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
                    DATA.pointArr = [];
                    DATA.pointArr.push(point);
                    DATA.startPointX = DATA.pointArr[0].x;
                    DATA.startPointY = DATA.pointArr[0].y;
                    DATA.startPointZ = DATA.pointArr[0].z;
                    bt_Plug_Annotation.setAnnotation("a1", DATA.startPointX, DATA.startPointY, DATA.startPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "起点" + "</span></div>", false, 10, 1000);
                    DialogUI.getParameterInputUI("exvalue").setVal('');
                    DialogUI.getParameterInputUI("eyvalue").setVal('');
                    DialogUI.getParameterInputUI("ezvalue").setVal('');
                }
                DialogUI.getParameterInputUI("sxvalue").setVal(DATA.startPointX);
                DialogUI.getParameterInputUI("syvalue").setVal(DATA.startPointY);
                DialogUI.getParameterInputUI("szvalue").setVal(DATA.startPointZ);
            }
        },
        // 设置半径
        SetRadius: function(ep) {
            let x = ep[0];
            let y = ep[1];
            let endPoint = bt_Util.screenToWorld(x, y);
            DATA.radius = Number((Math.sqrt((Math.abs(DATA.startPoint.x - endPoint.x)) * (Math.abs(DATA.startPoint.x - endPoint.x)) + (Math.abs(DATA.startPoint.y - endPoint.y)) * (Math.abs(DATA.startPoint.y - endPoint.y)) + (Math.abs(DATA.startPoint.z - endPoint.z)) * (Math.abs(DATA.startPoint.z - endPoint.z)))).toFixed(2));
            DialogUI.getParameterInputUI("radiusvalue").setVal(DATA.radius);
            let angleXY = 0;
            let borderPoint;
            DATA.EndPointArr = [];
            for (let m = 0, angleXZ = 0; angleXZ < 360; m++) {
                borderPoint = {
                    x: DATA.endPointX + DATA.radius * Math.cos(angleXY * Math.PI / 180) * Math.cos(angleXZ * Math.PI / 180),
                    y: DATA.endPointY + DATA.radius * Math.cos(angleXY * Math.PI / 180) * Math.sin(angleXZ * Math.PI / 180),
                    z: DATA.endPointZ + DATA.radius * Math.sin(angleXY * Math.PI / 180)
                };
                DATA.EndPointArr.push(`${borderPoint.x} ${borderPoint.y} ${borderPoint.z}`);
                angleXZ += DATA.angle;
            }
            for (let m = 0; m < 36; m++) {
                // 画扫描区域的圆面范围
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningRing0${m} 4 1 0 0 0 16 2 2 ${DATA.EndPointArr[m]} 0 255 0 255 ${DATA.EndPointArr[m + 1]} 0 255 0 255 0 1 0;`);
            }
            // 画扫描区域的圆面范围
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningRing 4 1 0 0 0 16 2 2 ${DATA.EndPointArr[0]} 0 255 0 255 ${DATA.EndPointArr[DATA.EndPointArr.length - 1]} 0 255 0 255 0 1 0;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh;`);
        },
        // 平面检测没有输入中心点坐标时的处理逻辑
        PlaneDetection: function(ep) {
            // 547341.368745 3374993.691501 98.355654
            if (ep[0] === 0) {
                let x = ep[1];
                let y = ep[2];
                if (DATA.clickNumber == 0) {
                    METHOD.ClearVisualPlane(DATA.i);
                    bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh;`);
                    DATA.startPoint = bt_Util.screenToWorld(x, y);
                    DATA.endPointX = DATA.startPoint.x;
                    DATA.endPointY = DATA.startPoint.y;
                    DATA.endPointZ = DATA.startPoint.z;
                    DialogUI.getParameterInputUI("exvalue").setVal(DATA.endPointX);
                    DialogUI.getParameterInputUI("eyvalue").setVal(DATA.endPointY);
                    DialogUI.getParameterInputUI("ezvalue").setVal(DATA.endPointZ);
                    bt_Plug_Annotation.setAnnotation("a1", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "中心点" + "</span></div>", false, 10, 1000);
                    DATA.clickNumber = 1;
                    bt_event.addEventListener("GUIEvent\\KM\\OnMouseMove", METHOD.SetRadius);
                } else if (DATA.clickNumber == 1) {
                    bt_event.removeEventListener("GUIEvent\\KM\\OnMouseMove", METHOD.SetRadius);
                    DATA.clickNumber = 0;
                    METHOD.ClearRing();
                    bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh;`);
                    METHOD.PlaneDetectionRender();
                }
            }
        },
        // 平面检测结果渲染方法
        PlaneDetectionRender: function() {
            DATA.EndPointArr = [];
            DATA.intersectionPointArr = [];
            let endPoint;
            for (let m = 0, angleXZ = 0; angleXZ < 360; m++) {
                endPoint = {
                    x: DATA.endPointX + DATA.radius * Math.cos(angleXZ * Math.PI / 180),
                    y: DATA.endPointY + DATA.radius * Math.sin(angleXZ * Math.PI / 180),
                    z: DATA.endPointZ
                };
                DATA.EndPointArr.push(endPoint);
                DATA.intersectionPoint = bt_Util.lineIntersect(DATA.endPointX, DATA.endPointY, DATA.endPointZ, endPoint.x, endPoint.y, endPoint.z);
                DATA.intersectionPointArr.push(DATA.intersectionPoint);
                angleXZ += DATA.angle;
            }
            for (let m = 0; m < DATA.intersectionPointArr.length - 1; m++) {
                // 画扫描区域的圆面范围
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningPlane0${m} 1 1 0 0 0 16 3 3 ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[m].x} ${DATA.EndPointArr[m].y} ${DATA.EndPointArr[m].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[m + 1].x} ${DATA.EndPointArr[m + 1].y} ${DATA.EndPointArr[m + 1].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 0;`);
                // 画可视区域的范围
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisiblePlane0${m} 1 1 0 0 0 16 3 3 ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPointArr[m].x} ${DATA.intersectionPointArr[m].y} ${DATA.intersectionPointArr[m].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPointArr[m + 1].x} ${DATA.intersectionPointArr[m + 1].y} ${DATA.intersectionPointArr[m + 1].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 0;`);
            }
            // 画扫描区域的圆面范围
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningPlane 1 1 0 0 0 16 3 3 ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[0].x} ${DATA.EndPointArr[0].y} ${DATA.EndPointArr[0].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[DATA.EndPointArr.length - 1].x} ${DATA.EndPointArr[DATA.EndPointArr.length - 1].y} ${DATA.EndPointArr[DATA.EndPointArr.length - 1].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 0;`);
            // 画可视区域的范围
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisiblePlane 1 1 0 0 0 16 3 3 ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPointArr[0].x} ${DATA.intersectionPointArr[0].y} ${DATA.intersectionPointArr[0].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPointArr[DATA.intersectionPointArr.length - 1].x} ${DATA.intersectionPointArr[DATA.intersectionPointArr.length - 1].y} ${DATA.intersectionPointArr[DATA.intersectionPointArr.length - 1].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 0;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh;`);
        },
        // 可视空间检测
        SpaceDetection: function(ep) {
            // 547364.913131 3375139.122264 51.592001
            if (ep[0] === 0) {
                let x = ep[1];
                let y = ep[2];
                if (DATA.clickNumber == 0) {
                    METHOD.ClearVisualSpace(DATA.i);
                    bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh;`);
                    DATA.startPoint = bt_Util.screenToWorld(x, y);
                    DATA.endPointX = DATA.startPoint.x;
                    DATA.endPointY = DATA.startPoint.y;
                    DATA.endPointZ = DATA.startPoint.z;
                    DialogUI.getParameterInputUI("exvalue").setVal(DATA.endPointX);
                    DialogUI.getParameterInputUI("eyvalue").setVal(DATA.endPointY);
                    DialogUI.getParameterInputUI("ezvalue").setVal(DATA.endPointZ);
                    bt_Plug_Annotation.setAnnotation("a1", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "中心点" + "</span></div>", false, 10, 1000);
                    DATA.clickNumber = 1;
                    bt_event.addEventListener("GUIEvent\\KM\\OnMouseMove", METHOD.SetRadius);
                } else if (DATA.clickNumber == 1) {
                    bt_event.removeEventListener("GUIEvent\\KM\\OnMouseMove", METHOD.SetRadius);
                    DATA.clickNumber = 0;
                    METHOD.ClearRing();
                    bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh;`);
                    METHOD.SpaceDetectionRender();
                }
            }
        },
        // 空间检测结果渲染方法
        SpaceDetectionRender: function() {
            DATA.SpaceIntersectsArr = [];
            DATA.EndPointArr = [];
            DATA.BottomPlaneIntersectionPoint = [];
            let endPoint;
            let SpaceIntersectionPoint;
            DATA.length = 360 % DATA.angle == 0 ? (360 / DATA.angle) : (Math.floor(360 / DATA.angle) + 1);
            // 红色：255 0 0；绿色： 0 255 0；蓝色：0 0 255
            for (let n = 0, angleXZ = 90; angleXZ < 270; angleXZ += DATA.angle, n++) {
                for (let m = 0, angleXY = 0; angleXY <= 180; m++) {
                    endPoint = {
                        x: DATA.endPointX + DATA.radius * Math.cos(angleXY * Math.PI / 180) * Math.cos(angleXZ * Math.PI / 180),
                        y: DATA.endPointY + DATA.radius * Math.cos(angleXY * Math.PI / 180) * Math.sin(angleXZ * Math.PI / 180),
                        z: DATA.endPointZ + DATA.radius * Math.sin(angleXY * Math.PI / 180)
                    };
                    DATA.EndPointArr.push(endPoint);
                    SpaceIntersectionPoint = bt_Util.lineIntersect(DATA.endPointX, DATA.endPointY, DATA.endPointZ, endPoint.x, endPoint.y, endPoint.z);
                    DATA.SpaceIntersectsArr.push(SpaceIntersectionPoint);
                    if (angleXY < 180 && (angleXY + DATA.angle) > 180) {
                        angleXY = 180;
                    } else {
                        angleXY += DATA.angle;
                    }
                }
            }
            if (DATA.length % 2 != 0) {
                DATA.length = DATA.length + 1;
                for (let n = 0; n < DATA.length / 2; n++) {
                    DATA.BottomPlaneIntersectionPoint.push(DATA.SpaceIntersectsArr[n * (DATA.length / 2 + 1)]);
                    DATA.BottomPlaneIntersectionPoint.push(DATA.SpaceIntersectsArr[DATA.length / 2 + n * (DATA.length / 2 + 1)]);
                }
            } else {
                for (let n = 0; n < DATA.length / 2; n++) {
                    DATA.BottomPlaneIntersectionPoint.push(DATA.SpaceIntersectsArr[n * (DATA.length / 2 + 1)]);
                    DATA.BottomPlaneIntersectionPoint.push(DATA.SpaceIntersectsArr[DATA.length / 2 + n * (DATA.length / 2 + 1)]);
                }
            }
            DATA.hCenterEndPoint = {
                x: DATA.endPointX + DATA.radius * Math.cos(90 * Math.PI / 180) * Math.cos(0 * Math.PI / 180),
                y: DATA.endPointY + DATA.radius * Math.cos(90 * Math.PI / 180) * Math.sin(0 * Math.PI / 180),
                z: DATA.endPointZ + DATA.radius * Math.sin(90 * Math.PI / 180)
            };
            DATA.hCenterIntersectionPoint = bt_Util.lineIntersect(DATA.endPointX, DATA.endPointY, DATA.endPointZ, DATA.endPointX + DATA.radius * Math.cos(90 * Math.PI / 180) * Math.cos(0 * Math.PI / 180), DATA.endPointY + DATA.radius * Math.cos(90 * Math.PI / 180) * Math.sin(0 * Math.PI / 180), DATA.endPointZ + DATA.radius * Math.sin(90 * Math.PI / 180));
            // 画扫面体的表面
            for (let n = 0; n < (DATA.length / 2 - 1); n++) {
                for (let m = 0; m < Math.floor(DATA.length / 4); m++) {
                    // 画每次使angleXZ保持不变，angleXY从0旋转至180之间、除中间角度的点连成的面
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningSurface1${m + n * DATA.length / 2} 1 1 0 0 0 16 4 6 ${DATA.EndPointArr[m + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[m + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[m + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[m + 1 + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[m + 1 + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[m + 1 + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 1 2 3 0; `);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningSurface2${m + n * DATA.length / 2} 1 1 0 0 0 16 4 6 ${DATA.EndPointArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z}  ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 1 2 3 0; `);
                }
                // 画每次使angleXZ保持不变，angleXY从0旋转至180的过程中的中间角度的点连成的面
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningSurface5${n} 1 1 0 0 0 16 3 3 ${DATA.hCenterEndPoint.x} ${DATA.hCenterEndPoint.y} ${DATA.hCenterEndPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 0; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningSurface6${n} 1 1 0 0 0 16 3 3 ${DATA.hCenterEndPoint.x} ${DATA.hCenterEndPoint.y} ${DATA.hCenterEndPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 0; `);
            }
            // 画angleXZ的起始角度angleXZ=90和结束角度angleXZ=270、然后angleXY从0到180之间的角度连成的面，但是不能画angleXY在中间的两个角度的点连成的面
            for (let n = 0; n < Math.floor(DATA.length / 4); n++) {
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningSurface3${n} 1 1 0 0 0 16 4 6 ${DATA.EndPointArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - n)].x} ${DATA.EndPointArr[(DATA.length / 2 - n)].y} ${DATA.EndPointArr[(DATA.length / 2 - n)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - (n + 1))].x} ${DATA.EndPointArr[(DATA.length / 2 - (n + 1))].y} ${DATA.EndPointArr[(DATA.length / 2 - (n + 1))].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 1 2 3 0; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningSurface4${n} 1 1 0 0 0 16 4 6 ${DATA.EndPointArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[n].x} ${DATA.EndPointArr[n].y} ${DATA.EndPointArr[n].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[n + 1].x} ${DATA.EndPointArr[n + 1].y} ${DATA.EndPointArr[n + 1].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 1 2 3 0; `);
            }
            // 画angleXZ起始角度angleXZ=90和结束角度angleXZ=270、然后angleXY从0到180之间的中间的两个角度的点连成的面
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningSurface7 1 1 0 0 0 16 3 3 ${DATA.hCenterEndPoint.x} ${DATA.hCenterEndPoint.y} ${DATA.hCenterEndPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[Math.floor(DATA.length / 4) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4))].x} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4))].y} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4))].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 0; `);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj ScanningSurface8 1 1 0 0 0 16 3 3 ${DATA.hCenterEndPoint.x} ${DATA.hCenterEndPoint.y} ${DATA.hCenterEndPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.EndPointArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.EndPointArr[Math.floor(DATA.length / 4)].x} ${DATA.EndPointArr[Math.floor(DATA.length / 4)].y} ${DATA.EndPointArr[Math.floor(DATA.length / 4)].z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 2 0; `);
            // 画可视体的表面
            for (let n = 0; n < (DATA.length / 2 - 1); n++) {
                for (let m = 0; m < Math.floor(DATA.length / 4); m++) {
                    // 画每次使angleXZ保持不变，angleXY从0旋转至180之间、除中间角度的点连成的面
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisibleSurface1${m + n * DATA.length / 2} 1 1 0 0 0 16 4 6 ${DATA.SpaceIntersectsArr[m + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[m + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[m + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[m + 1 + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[m + 1 + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[m + 1 + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 1 2 3 0; `);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisibleSurface2${m + n * DATA.length / 2} 1 1 0 0 0 16 4 6 ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 1 2 3 0; `);
                }
                if (90 % DATA.angle != 0) {
                    // 画每次使angleXZ保持不变，angleXY从0旋转至180的过程中的中间角度的点连成的面
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisibleSurface5${n} 1 1 0 0 0 16 3 3 ${DATA.hCenterEndPoint.x} ${DATA.hCenterEndPoint.y} ${DATA.hCenterEndPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 0; `);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisibleSurface6${n} 1 1 0 0 0 16 3 3 ${DATA.hCenterEndPoint.x} ${DATA.hCenterEndPoint.y} ${DATA.hCenterEndPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 0; `);
                }
            }
            // 画angleXZ的起始角度angleXZ=90和结束角度angleXZ=(270-angle)、然后angleXY从0到180之间的角度连成的面，但是不能画angleXY在中间的两个角度的点连成的面
            for (let n = 0; n < Math.floor(DATA.length / 4); n++) {
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisibleSurface3${n} 1 1 0 0 0 16 4 6 ${DATA.SpaceIntersectsArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1))].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1))].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1))].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 1 2 3 0; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisibleSurface4${n} 1 1 0 0 0 16 4 6 ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[n].x} ${DATA.SpaceIntersectsArr[n].y} ${DATA.SpaceIntersectsArr[n].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[n + 1].x} ${DATA.SpaceIntersectsArr[n + 1].y} ${DATA.SpaceIntersectsArr[n + 1].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 1 2 3 0; `);
            }
            if (90 % DATA.angle != 0) {
                // 画angleXZ起始角度angleXZ=90和结束角度angleXZ=(270-angle)、然后angleXY从0到180之间的中间的两个角度的点连成的面
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisibleSurface7 1 1 0 0 0 16 3 3 ${DATA.hCenterIntersectionPoint.x} ${DATA.hCenterIntersectionPoint.y} ${DATA.hCenterIntersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4))].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4))].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4))].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 0; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisibleSurface8 1 1 0 0 0 16 3 3 ${DATA.hCenterIntersectionPoint.x} ${DATA.hCenterIntersectionPoint.y} ${DATA.hCenterIntersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4)].x} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4)].y} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 2 0; `);
            }
            // 画底面可视区域
            for (let n = 0; n < (DATA.length - 2); n += 2) {
                // 画底面可视点连成的面
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj BottomPlane1${n} 1 1 0 0 0 16 3 3 ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[n].x} ${DATA.BottomPlaneIntersectionPoint[n].y} ${DATA.BottomPlaneIntersectionPoint[n].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[n + 2].x} ${DATA.BottomPlaneIntersectionPoint[n + 2].y} ${DATA.BottomPlaneIntersectionPoint[n + 2].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} 0 1 2 0; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj BottomPlane2${n} 1 1 0 0 0 16 3 3 ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[n + 1].x} ${DATA.BottomPlaneIntersectionPoint[n + 1].y} ${DATA.BottomPlaneIntersectionPoint[n + 1].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[n + 3].x} ${DATA.BottomPlaneIntersectionPoint[n + 3].y} ${DATA.BottomPlaneIntersectionPoint[n + 3].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} 0 1 2 0; `);
            }
            // 画底面最后一次扫面与第一次扫面的可视点连成的面
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj BottomPlane3 1 1 0 0 0 16 3 3 ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[DATA.length - 1].x} ${DATA.BottomPlaneIntersectionPoint[DATA.length - 1].y} ${DATA.BottomPlaneIntersectionPoint[DATA.length - 1].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[0].x} ${DATA.BottomPlaneIntersectionPoint[0].y} ${DATA.BottomPlaneIntersectionPoint[0].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} 0 1 2 0; `);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj BottomPlane4 1 1 0 0 0 16 3 3 ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[DATA.length - 2].x} ${DATA.BottomPlaneIntersectionPoint[DATA.length - 2].y} ${DATA.BottomPlaneIntersectionPoint[DATA.length - 2].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[1].x} ${DATA.BottomPlaneIntersectionPoint[1].y} ${DATA.BottomPlaneIntersectionPoint[1].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} 0 1 2 0; `);
            // // 画底面可视点连成的线段
            // for (let n = 0; n < (DATA.length - 2); n += 2) {
            //     bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj BottomPlane1${n} 4 1 0 0 0 16 2 2 ${DATA.BottomPlaneIntersectionPoint[n].x} ${DATA.BottomPlaneIntersectionPoint[n].y} ${DATA.BottomPlaneIntersectionPoint[n].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[n + 2].x} ${DATA.BottomPlaneIntersectionPoint[n + 2].y} ${DATA.BottomPlaneIntersectionPoint[n + 2].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} 0 1 0; `);
            //     bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj BottomPlane2${n} 4 1 0 0 0 16 2 2 ${DATA.BottomPlaneIntersectionPoint[n + 1].x} ${DATA.BottomPlaneIntersectionPoint[n + 1].y} ${DATA.BottomPlaneIntersectionPoint[n + 1].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[n + 3].x} ${DATA.BottomPlaneIntersectionPoint[n + 3].y} ${DATA.BottomPlaneIntersectionPoint[n + 3].z} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} 0 1 0; `);
            // }
            // // 画底面最后一次扫面与第一次扫面的可视点连成的线段
            // bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj BottomPlane3 4 1 0 0 0 16 2 2 ${DATA.BottomPlaneIntersectionPoint[DATA.length - 1]} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[0]} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} 0 1 0; `);
            // bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj BottomPlane4 4 1 0 0 0 16 2 2 ${DATA.BottomPlaneIntersectionPoint[DATA.length - 2]} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} ${DATA.BottomPlaneIntersectionPoint[1]} ${DATA.visibleGroundRcolor} ${DATA.visibleGroundGcolor} ${DATA.visibleGroundBcolor} ${DATA.visibleGroundAlpha} 0 1 0; `);
            // 画可视点线段
            for (let n = 0; n < (DATA.length / 2 - 1); n++) {
                for (let m = 0; m < Math.floor(DATA.length / 4); m++) {
                    // 画每次使angleXZ保持不变，angleXY从0旋转至180之间、除中间角度的点连成的线段
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisualLine1${m + n * DATA.length / 2} 4 1 0 0 0 8 4 8 ${DATA.SpaceIntersectsArr[m + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[m + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[m + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[m + 1 + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[m + 1 + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[m + 1 + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[m + 1 + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[m + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 1 2 2 3 3 0 0; `);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisualLine2${m + n * DATA.length / 2} 4 1 0 0 0 8 4 8 ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (m + 1)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - m) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 1 2 2 3 3 0 0; `);
                }
                if (90 % DATA.angle != 0) {
                    // 画每次使angleXZ保持不变，angleXY从0旋转至180的过程中的中间角度的点连成的面
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisualLine5${n} 4 1 0 0 0 8 3 6 ${DATA.hCenterIntersectionPoint.x} ${DATA.hCenterIntersectionPoint.y} ${DATA.hCenterIntersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[Math.floor(DATA.length / 4) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 1 2 2 0 0; `);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisualLine6${n} 4 1 0 0 0 8 3 6 ${DATA.hCenterIntersectionPoint.x} ${DATA.hCenterIntersectionPoint.y} ${DATA.hCenterIntersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - Math.floor(DATA.length / 4)) + (DATA.length / 2 + 1) + n * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 1 2 2 0 0; `);
                }
            }
            // 画angleXY在0和(180-angle)之间,angleXZ=180和angleXZ=360这两种情况下可视点连成的线段
            for (let n = 0; n < Math.floor(DATA.length / 4); n++) {
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisualLine3${n} 4 1 0 0 0 8 4 8 ${DATA.SpaceIntersectsArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[n + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[n + 1 + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1))].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1))].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1))].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 1 2 2 3 3 0 0; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj VisualLine4${n} 4 1 0 0 0 8 4 8 ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - n) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].x} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].y} ${DATA.SpaceIntersectsArr[(DATA.length / 2 - (n + 1)) + (DATA.length / 2 - 1) * (DATA.length / 2 + 1)].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[n + 1].x} ${DATA.SpaceIntersectsArr[n + 1].y} ${DATA.SpaceIntersectsArr[n + 1].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.SpaceIntersectsArr[n].x} ${DATA.SpaceIntersectsArr[n].y} ${DATA.SpaceIntersectsArr[n].z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 1 2 2 3 3 0 0; `);
            }
            bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
        },
        // 清除上一次在画布上画的线段，防止对下次绘制产生干扰
        ClearVisibleLineSegment() {
            bt_Plug_Annotation.removeAnnotation("a1");
            bt_Plug_Annotation.removeAnnotation("a2");
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj StartIntersectLine 8; `);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj IntersectEndPointLine 8; `);
        },
        // 清除上一次在画布上画的平面，防止对下次绘制产生干扰
        ClearVisualPlane(i) {
            bt_Plug_Annotation.removeAnnotation("a1");
            bt_Plug_Annotation.removeAnnotation("a2");
            for (let m = 0; m < i; m++) {
                // 删除上次画扫描区域的圆面范围
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningPlane0${m} 16; `);
                // 删除上次画可视区域的范围
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisiblePlane0${m} 16; `);
            }
            // 删除上次画扫描区域的圆面范围
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningPlane 16; `);
            // 删除上次画可视区域的范围
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisiblePlane 16; `);
        },
        // 清除上一次在画布上画的空间球体，防止对下次绘制产生干扰
        ClearVisualSpace(p) {
            bt_Plug_Annotation.removeAnnotation("a1");
            bt_Plug_Annotation.removeAnnotation("a2");
            // 删除上次画扫面体的表面
            for (let n = 0; n < (p / 2 - 1); n++) {
                for (let m = 0; m < Math.floor(p / 4); m++) {
                    // 删除上次画angleXY在0和180之间除中间位置的终点连成的面,不包括angleXZ=90和angleXZ=(270-angle)这两中情况下可视点连成的表面
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningSurface1${m + n * p / 2} 16; `);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningSurface2${m + n * p / 2} 16; `);
                }
                // 删除上次画angleXY介于0和180中间的两个终点与最高终点连成的面,不包括angleXZ=90和angleXZ=(270-angle)这两种情况下终点连成的表面
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningSurface5${n} 16; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningSurface6${n} 16; `);
            }
            // 删除上次画angleXY在angle和(180-angle)之间,angleXZ=90和angleXZ=(270-angle)这两种情况下终点连成的表面
            for (let n = 0; n < Math.floor(p / 4); n++) {
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningSurface3${n} 16; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningSurface4${n} 16; `);
            }
            // 删除上次画angleXZ起始角度angleXZ=90和结束角度angleXZ=270、然后angleXY从0到180之间的中间的两个角度的点连成的面
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningSurface7 16; `);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningSurface8 16; `);
            // 删除上次画可视体的表面
            for (let n = 0; n < (p / 2 - 1); n++) {
                for (let m = 0; m < Math.floor(p / 4); m++) {
                    // 删除上次画angleXY在0和(180-angle)之间的可视点连成的面,不包括angleXZ=0和angleXZ=180这两中情况下可视点连成的表面
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisibleSurface1${m + n * p / 2} 16; `);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisibleSurface2${m + n * p / 2} 16; `);
                }
                // 删除上次画angleXY在0和(180-angle)之间,angleXZ=0和angleXZ=180这两种情况下可视点连成的表面
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisibleSurface5${n} 16;`);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisibleSurface6${n} 16;`);
            }
            // 删除上次画angleXZ的起始角度angleXZ=90和结束角度angleXZ=270、然后angleXY从0到180之间的角度连成的面，但是不能画angleXY在中间的两个角度的点连成的面
            for (let n = 0; n < Math.floor(p / 4); n++) {
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisibleSurface3${n} 16;`);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisibleSurface4${n} 16;`);
            }
            // 删除上次画angleXZ起始角度angleXZ=90和结束角度angleXZ=270、然后angleXY从0到180之间的中间的两个角度的点连成的面
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisibleSurface7 16;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisibleSurface8 16;`);
            // 删除上次画底面可视区域
            for (let n = 0; n < (p - 2); n += 2) {
                // 删除上次画底面可视点连成的面
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj BottomPlane1${n} 16; `);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj BottomPlane2${n} 16; `);
            }
            // 删除上次画底面最后一次扫面与第一次扫面的可视点连成的面
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj BottomPlane3 16; `);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj BottomPlane4 16; `);
            // // 删除上次画底面可视点连成的线段
            // for (let n = 0; n < (p - 2); n += 2) {
            //     bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj BottomPlane1${ n } 8; `);
            //     bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj BottomPlane2${ n } 8; `);
            // }
            // // 删除上次画底面最后一次扫面与第一次扫面的可视点连成的线段
            // bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj BottomPlane3 8; `);
            // bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj BottomPlane4 8; `);
            // 删除上次画可视点线段
            for (let n = 0; n < (p / 2 - 1); n++) {
                for (let m = 0; m < Math.floor(p / 4); m++) {
                    // 删除上次画angleXY在0和(180-angle)之间的可视点连成的线段，不包括angleXZ=180和angleXZ=360这两个角度之间的可视点连成的线
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisualLine1${m + n * p / 2} 8;`);
                    bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisualLine2${m + n * p / 2} 8;`);
                }
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisualLine5${n} 8;`);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisualLine6${n} 8;`);
            }
            // 删除上次画angleXY在0和(180-angle)之间,angleXZ=180和angleXZ=360这两种情况下可视点连成的表面
            for (let n = 0; n < Math.floor(p / 4); n++) {
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisualLine3${n} 8;`);
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj VisualLine4${n} 8;`);
            }
        },
        // 清除设置半径时画的圆环
        ClearRing() {
            for (let m = 0; m < 36; m++) {
                // 画扫描区域的圆面范围
                bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningRing0${m} 16;`);
            }
            // 画扫描区域的圆面范围
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\DelRenderObj ScanningRing 16;`);
        }
    };
    DialogUI.getParameterInputUI("radiusvalue").onValChange = function(R) {
        // 547364.913131 3375139.122264 51.592001
        DATA.radius = Number(R);
        if (DATA.type == "planeVisual") {
            METHOD.ClearVisualPlane(DATA.i);
            METHOD.PlaneDetectionRender();
        } else if (DATA.type == "spaceVisual") {
            METHOD.ClearVisualSpace(DATA.i);
            METHOD.SpaceDetectionRender();
        }
    };
    DialogUI.getParameterInputUI("sxvalue").onValChange = function(SX) {
        DATA.startPointX = Number(SX);
        bt_Plug_Annotation.setAnnotation("a1", DATA.startPointX, DATA.startPointY, DATA.startPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "起点" + "</span></div>", false, 10, 1000);
        bt_Plug_Annotation.setAnnotation("a2", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "终点" + "</span></div>", false, 10, 1000);
        DATA.intersectionPoint = bt_Util.lineIntersect(DATA.startPointX, DATA.startPointY, DATA.startPointZ, DATA.endPointX, DATA.endPointY, DATA.endPointZ);
        bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj StartIntersectLine 4 1 0 0 0 8 2 2 ${DATA.startPointX} ${DATA.startPointY} ${DATA.startPointZ} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 0;`);
        bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj IntersectEndPointLine 4 1 0 0 0 8 2 2 ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 0;`);
        bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
    };
    DialogUI.getParameterInputUI("syvalue").onValChange = function(SY) {
        DATA.startPointY = Number(SY);
        bt_Plug_Annotation.setAnnotation("a1", DATA.startPointX, DATA.startPointY, DATA.startPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "起点" + "</span></div>", false, 10, 1000);
        bt_Plug_Annotation.setAnnotation("a2", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "终点" + "</span></div>", false, 10, 1000);
        DATA.intersectionPoint = bt_Util.lineIntersect(DATA.startPointX, DATA.startPointY, DATA.startPointZ, DATA.endPointX, DATA.endPointY, DATA.endPointZ);
        bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj StartIntersectLine 4 1 0 0 0 8 2 2 ${DATA.startPointX} ${DATA.startPointY} ${DATA.startPointZ} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 0;`);
        bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj IntersectEndPointLine 4 1 0 0 0 8 2 2 ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 0;`);
        bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
    };
    DialogUI.getParameterInputUI("szvalue").onValChange = function(SZ) {
        DATA.startPointZ = Number(SZ);
        bt_Plug_Annotation.setAnnotation("a1", DATA.startPointX, DATA.startPointY, DATA.startPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "起点" + "</span></div>", false, 10, 1000);
        bt_Plug_Annotation.setAnnotation("a2", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "终点" + "</span></div>", false, 10, 1000);
        DATA.intersectionPoint = bt_Util.lineIntersect(DATA.startPointX, DATA.startPointY, DATA.startPointZ, DATA.endPointX, DATA.endPointY, DATA.endPointZ);
        bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj StartIntersectLine 4 1 0 0 0 8 2 2 ${DATA.startPointX} ${DATA.startPointY} ${DATA.startPointZ} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 0;`);
        bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj IntersectEndPointLine 4 1 0 0 0 8 2 2 ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 0;`);
        bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
    };
    DialogUI.getParameterInputUI("exvalue").onValChange = function(EX) {
        DATA.endPointX = Number(EX);
        if (DATA.type == "pointVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.startPointX, DATA.startPointY, DATA.startPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "起点" + "</span></div>", false, 10, 1000);
            bt_Plug_Annotation.setAnnotation("a2", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "终点" + "</span></div>", false, 10, 1000);
            DATA.intersectionPoint = bt_Util.lineIntersect(DATA.startPointX, DATA.startPointY, DATA.startPointZ, DATA.endPointX, DATA.endPointY, DATA.endPointZ);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj StartIntersectLine 4 1 0 0 0 8 2 2 ${DATA.startPointX} ${DATA.startPointY} ${DATA.startPointZ} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 0;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj IntersectEndPointLine 4 1 0 0 0 8 2 2 ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 0;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
        } else if (DATA.type == "planeVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "中心点" + "</span></div>", false, 10, 1000);
            METHOD.ClearVisualPlane(DATA.i);
            METHOD.PlaneDetectionRender();
        } else if (DATA.type == "spaceVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "中心点" + "</span></div>", false, 10, 1000);
            METHOD.ClearVisualSpace(DATA.i);
            METHOD.SpaceDetectionRender();
        }
    };
    DialogUI.getParameterInputUI("eyvalue").onValChange = function(EY) {
        DATA.endPointY = Number(EY);
        if (DATA.type == "pointVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.startPointX, DATA.startPointY, DATA.startPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "起点" + "</span></div>", false, 10, 1000);
            bt_Plug_Annotation.setAnnotation("a2", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "终点" + "</span></div>", false, 10, 1000);
            DATA.intersectionPoint = bt_Util.lineIntersect(DATA.startPointX, DATA.startPointY, DATA.startPointZ, DATA.endPointX, DATA.endPointY, DATA.endPointZ);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj StartIntersectLine 4 1 0 0 0 8 2 2 ${DATA.startPointX} ${DATA.startPointY} ${DATA.startPointZ} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 0;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj IntersectEndPointLine 4 1 0 0 0 8 2 2 ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 0;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
        } else if (DATA.type == "planeVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "中心点" + "</span></div>", false, 10, 1000);
            METHOD.ClearVisualPlane(DATA.i);
            METHOD.PlaneDetectionRender();
        } else if (DATA.type == "spaceVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "中心点" + "</span></div>", false, 10, 1000);
            METHOD.ClearVisualSpace(DATA.i);
            METHOD.SpaceDetectionRender();
        }
    };
    DialogUI.getParameterInputUI("ezvalue").onValChange = function(EZ) {
        DATA.endPointZ = Number(EZ);
        if (DATA.type == "pointVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.startPointX, DATA.startPointY, DATA.startPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "起点" + "</span></div>", false, 10, 1000);
            bt_Plug_Annotation.setAnnotation("a2", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "终点" + "</span></div>", false, 10, 1000);
            DATA.intersectionPoint = bt_Util.lineIntersect(DATA.startPointX, DATA.startPointY, DATA.startPointZ, DATA.endPointX, DATA.endPointY, DATA.endPointZ);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj StartIntersectLine 4 1 0 0 0 8 2 2 ${DATA.startPointX} ${DATA.startPointY} ${DATA.startPointZ} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.rcolor} ${DATA.gcolor} ${DATA.bcolor} ${DATA.alpha} 0 1 0;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\DynamicFrame\\AddRenderObj IntersectEndPointLine 4 1 0 0 0 8 2 2 ${DATA.intersectionPoint.x} ${DATA.intersectionPoint.y} ${DATA.intersectionPoint.z} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} ${DATA.endPointX} ${DATA.endPointY} ${DATA.endPointZ} ${DATA.wholeRcolor} ${DATA.wholeGcolor} ${DATA.wholeBcolor} ${DATA.wholeAlpha} 0 1 0;`);
            bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh; `);
        } else if (DATA.type == "planeVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "中心点" + "</span></div>", false, 10, 1000);
            METHOD.ClearVisualPlane(DATA.i);
            METHOD.PlaneDetectionRender();
        } else if (DATA.type == "spaceVisual") {
            bt_Plug_Annotation.setAnnotation("a1", DATA.endPointX, DATA.endPointY, DATA.endPointZ, -8, -16, "<div style='background-position:center left; background-repeat: no-repeat; height:16px;line-height:10px;'><span style='margin-left:16px; font-size:9px; white-space: nowrap;'>" + "中心点" + "</span></div>", false, 10, 1000);
            METHOD.ClearVisualSpace(DATA.i);
            METHOD.SpaceDetectionRender();
        }
    };

    function activate(type) {
        deactivate();
        if (type == "pointVisual") {
            DATA.type = "pointVisual";
            PointDetectionStyle();
            DialogUI.show = true;
            DialogUI.getHeadTitleUI().setVal('可视点检测');
            DialogUI.getParamsNameUI("paramsname1").setVal('起点坐标：');
            DialogUI.getParamsNameUI("paramsname2").setVal('终点坐标：');
            DialogUI.getTextAreaUI("radiusarea").show = false;
            DialogUI.getTextAreaUI("startpointarea").show = true;
            bt_event.addEventListener("GUIEvent\\KM\\OnMouseClick", METHOD.StartRadiusDetection);
        } else if (type == "planeVisual") {
            DATA.type = "planeVisual";
            PlaneDetectionStyle();
            DialogUI.show = true;
            DialogUI.getHeadTitleUI().setVal('可视平面检测');
            DialogUI.getTextAreaUI("radiusarea").show = true;
            DialogUI.getTextAreaUI("startpointarea").show = false;
            DialogUI.getParamsNameUI("paramsname1").setVal('检测半径R：');
            DialogUI.getParamsNameUI("paramsname2").setVal('中心点坐标：');
            bt_event.addEventListener("GUIEvent\\KM\\OnMouseClick", METHOD.PlaneDetection);
        } else if (type == "spaceVisual") {
            DATA.type = "spaceVisual";
            SpaceDetectionStyle();
            DialogUI.show = true;
            DialogUI.getHeadTitleUI().setVal('可视空间检测');
            DialogUI.getParamsNameUI("paramsname1").setVal('检测半径R：');
            DialogUI.getParamsNameUI("paramsname2").setVal('中心点坐标：');
            DialogUI.getTextAreaUI("radiusarea").show = true;
            DialogUI.getTextAreaUI("startpointarea").show = false;
            bt_event.addEventListener("GUIEvent\\KM\\OnMouseClick", METHOD.SpaceDetection);
        }
    }

    function deactivate() {
        DATA.type = "";
        DialogUI.getParameterInputUI("radiusvalue").setVal('');
        DialogUI.getParameterInputUI("sxvalue").setVal('');
        DialogUI.getParameterInputUI("syvalue").setVal('');
        DialogUI.getParameterInputUI("szvalue").setVal('');
        DialogUI.getParameterInputUI("exvalue").setVal('');
        DialogUI.getParameterInputUI("eyvalue").setVal('');
        DialogUI.getParameterInputUI("ezvalue").setVal('');
        DATA.startPointX = 0;
        DATA.startPointY = 0;
        DATA.startPointZ = 0;
        DATA.endPointX = 0;
        DATA.endPointY = 0;
        DATA.endPointZ = 0;
        DATA.radius = 0;
        DialogUI.show = false;
        METHOD.ClearVisibleLineSegment();
        METHOD.ClearVisualPlane(DATA.i);
        METHOD.ClearVisualSpace(DATA.i);
        bt_Util.executeScript(`Render\\RenderDataContex\\ForceRefresh;`);
        bt_event.removeEventListener("GUIEvent\\KM\\OnMouseClick", METHOD.StartRadiusDetection);
        bt_event.removeEventListener("GUIEvent\\KM\\OnMouseClick", METHOD.PlaneDetection);
        bt_event.removeEventListener("GUIEvent\\KM\\OnMouseClick", METHOD.SpaceDetection);
    }
    return { activate, deactivate };
}
export default initVisual;