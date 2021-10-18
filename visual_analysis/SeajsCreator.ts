import BasicUICreatorFactory from '../BasicUICreatorFactory.js';
import { StaticTextHelper } from '../Helpers.js';
import { VueBasicUI, VueVisualAnalysisDialog, ChildID } from './VisualCommonClass.js';
class SeajsDialog extends VueVisualAnalysisDialog {
    constructor(id, UI, show = false) {
        super(id, UI, show);
    }
    updateUI() {
        this.UI.style.display = this.show ? 'block' : 'none';
    }
}
class SeajsTitle extends VueBasicUI {
    constructor(id, UI, parent, { show = true } = {}) {
        super(id, 'Title', UI, parent, show);
        const { getVal, setVal } = StaticTextHelper();
        this.getVal = getVal;
        this.setVal = (val) => {
            setVal(val);
            this.updateUI();
        };
    }
    updateUI() {
        this.UI.innerHTML = this.getVal();
    }
}
class SeajsStaticText extends VueBasicUI {
    constructor(id, UI, parent, { show = true } = {}) {
        super(id, 'StaticText', UI, parent, show);
        const { getVal, setVal } = StaticTextHelper();
        this.getVal = getVal;
        this.setVal = (val) => {
            setVal(val);
            this.updateUI();
        };
    }
    updateUI() {
        this.UI.innerHTML = this.getVal();
    }
}
class SeajsTextArea extends VueBasicUI {
    constructor(id, UI, parent, { show = true } = {}) {
        super(id, 'StaticText', UI, parent, show);
        const { getVal, setVal } = StaticTextHelper();
        this.getVal = getVal;
        this.setVal = (val) => {
            setVal(val);
            this.updateUI();
        };
    }
    updateUI() {
        this.UI.style.display = this.show ? 'inline-block' : 'none';
    }
}
class SeajsParameterInput extends VueBasicUI {
    constructor(id, UI, parent) {
        super(id, 'ParameterInput', UI, parent, true);
        const { getVal, setVal } = StaticTextHelper();
        this.getVal = getVal;
        this.setVal = (val) => {
            setVal(val);
            this.UI.value = val;
        };
    }
}

function VisualCreator() {
    const tpl = `<div id="DetectionContainer">
        <div class="title">可视点检测</div>
        <div id="ParamsContainer" class="ParamsContainer">
            <div class="Params1">
                <span class="ParamsName1">起点坐标：</span>
                <span class="radiusValue"><input class="RValue" type="text" value=""></span>
                <span class="startPointParamsValue">
                    <div class="XContainer"><span>X:</span><input class="SXValue" type="text" value=""></div>
                    <div class="YContainer"><span>Y:</span><input class="SYValue" type="text" value=""></div>
                    <div class="ZContainer"><span>Z:</span><input class="SZValue" type="text" value=""></div>
                </span>  
            </div>
            <div class="Params2">
                <span class="ParamsName2">终点坐标：</span>
                <span class="endPointParamsValue">
                    <div class="XContainer"><span>X:</span><input class="EXValue" type="text" value=""></div>
                    <div class="YContainer"><span>Y:</span><input class="EYValue" type="text" value=""></div>
                    <div class="ZContainer"><span>Z:</span><input class="EZValue" type="text" value=""></div>
                </span>
            </div>
        </div>
    </div>`;
    let dom = document.createElement("div");
    dom.innerHTML = tpl;
    const html = dom.firstElementChild;
    document.body.appendChild(html);
    dom = null;
    const Dom = document.getElementById('DetectionContainer');
    const RValueBox = document.querySelector('.RValue');
    const SXValueBox = document.querySelector('.SXValue');
    const SYValueBox = document.querySelector('.SYValue');
    const SZValueBox = document.querySelector('.SZValue');
    const EXValueBox = document.querySelector('.EXValue');
    const EYValueBox = document.querySelector('.EYValue');
    const EZValueBox = document.querySelector('.EZValue');
    const DialogUI = new SeajsDialog('VisualDialog', Dom);
    const HeadTitle = new SeajsTitle(ChildID.HeadTitle, Dom.querySelector('.title'), DialogUI);
    const ParamsName1 = new SeajsStaticText("paramsname1", Dom.querySelector('.ParamsName1'), DialogUI);
    const ParamsName2 = new SeajsStaticText("paramsname2", Dom.querySelector('.ParamsName2'), DialogUI);
    const StartPointArea = new SeajsTextArea("startpointarea", Dom.querySelector('.startPointParamsValue'), DialogUI);
    const EndPointArea = new SeajsTextArea("endpointarea", Dom.querySelector('.endPointParamsValue'), DialogUI);
    const RadiusArea = new SeajsTextArea("radiusarea", Dom.querySelector('.radiusValue'), DialogUI);
    const RadiusInput = new SeajsParameterInput("radiusvalue", Dom.querySelector('.RValue'), DialogUI);
    const SXInput = new SeajsParameterInput("sxvalue", Dom.querySelector('.SXValue'), DialogUI);
    const SYInput = new SeajsParameterInput("syvalue", Dom.querySelector('.SYValue'), DialogUI);
    const SZInput = new SeajsParameterInput("szvalue", Dom.querySelector('.SZValue'), DialogUI);
    const EXInput = new SeajsParameterInput("exvalue", Dom.querySelector('.EXValue'), DialogUI);
    const EYInput = new SeajsParameterInput("eyvalue", Dom.querySelector('.EYValue'), DialogUI);
    const EZInput = new SeajsParameterInput("ezvalue", Dom.querySelector('.EZValue'), DialogUI);
    DialogUI.appendChild(HeadTitle);
    DialogUI.appendChild(ParamsName1);
    DialogUI.appendChild(ParamsName2);
    DialogUI.appendChild(StartPointArea);
    DialogUI.appendChild(EndPointArea);
    DialogUI.appendChild(RadiusArea);
    DialogUI.appendChild(RadiusInput);
    DialogUI.appendChild(SXInput);
    DialogUI.appendChild(SYInput);
    DialogUI.appendChild(SZInput);
    DialogUI.appendChild(EXInput);
    DialogUI.appendChild(EYInput);
    DialogUI.appendChild(EZInput);
    RValueBox.addEventListener('input', debounce(800, RValueBox, "radiusvalue"));
    SXValueBox.addEventListener('input', debounce(800, SXValueBox, "sxvalue"));
    SYValueBox.addEventListener('input', debounce(800, SYValueBox, "syvalue"));
    SZValueBox.addEventListener('input', debounce(800, SZValueBox, "szvalue"));
    EXValueBox.addEventListener('input', debounce(800, EXValueBox, "exvalue"));
    EYValueBox.addEventListener('input', debounce(800, EYValueBox, "eyvalue"));
    EZValueBox.addEventListener('input', debounce(800, EZValueBox, "ezvalue"));

    function debounce(delay, dom, id) {
        let timer
        let lastNowTime = 0
        let NowTime = 0
        return function() {
            if (lastNowTime == 0 && NowTime == 0) {
                lastNowTime = (new Date).getTime()
                let TimeDiff = lastNowTime - NowTime
                if (TimeDiff < delay) {
                    clearTimeout(timer)
                    timer = setTimeout(() => {
                        const value = dom.value;
                        DialogUI.getParameterInputUI(id).onValChange(value);
                    }, delay)
                } else {
                    timer = setTimeout(() => {
                        const value = dom.value;
                        DialogUI.getParameterInputUI(id).onValChange(value);
                    }, delay)
                }
            } else if (lastNowTime != 0 && NowTime == 0) {
                NowTime = (new Date).getTime()
                let TimeDiff = NowTime - lastNowTime
                if (TimeDiff < delay) {
                    clearTimeout(timer)
                    timer = setTimeout(() => {
                        const value = dom.value;
                        DialogUI.getParameterInputUI(id).onValChange(value);
                    }, delay)
                } else {
                    timer = setTimeout(() => {
                        const value = dom.value;
                        DialogUI.getParameterInputUI(id).onValChange(value);
                    }, delay)
                }
                lastNowTime = NowTime
                NowTime = 0
            }
        }
    }
    return DialogUI;
}
BasicUICreatorFactory.RegisterCreator('Visual', VisualCreator);