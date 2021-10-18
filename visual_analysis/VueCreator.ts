import BasicUICreatorFactory from '../BasicUICreatorFactory.js';
import { StaticTextHelper } from '../Helpers.js';
import { VueBasicUI, VueVisualAnalysisDialog, ChildID } from './VisualCommonClass.js';
// @ts-ignore
import Vue from 'vue';
class VueDialog extends VueVisualAnalysisDialog {
    constructor(id, UI, show = false) {
        super(id, UI, show);
    }
    updateUI() {
        this.UI.show = this.show;
    }
}
class VueTitle extends VueBasicUI {
    constructor(id, UI, parent, { show = true } = {}) {
        super(id, 'Button', UI, parent, show);
        const { getVal, setVal } = StaticTextHelper();
        this.getVal = getVal;
        this.setVal = (val) => {
            setVal(val);
            this.UI.innerHTML = val;
        };
    }
}
class VueStaticText extends VueBasicUI {
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
        this.UI.innerText = this.getVal();
    }
}
class VueTextArea extends VueBasicUI {
    constructor(id, UI, parent, { show = true } = {}) {
        super(id, 'TextArea', UI, parent, show);
        const { getVal, setVal } = StaticTextHelper();
        this.getVal = getVal;
        this.setVal = (val) => {
            setVal(val);
            this.updateUI();
        };
    }
    updateUI() {
        this.UI.style.display = this.show ? 'inline-block' : 'none';
    };
}
class VueParameterInput extends VueBasicUI {
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
const Helper = {
    DialogUI: null,
    realUI: null,
    observeProp(key, val) {
        const _this = this;
        Object.defineProperty(this, key, {
            get() {
                return val;
            },
            set(nv) {
                if (val === nv)
                    return;
                val = nv;
                _this.bindUI();
            }
        });
    },
    bindUI() {
        Helper.DialogUI.UI = Helper.realUI;
        Helper.DialogUI.getHeadTitleUI().UI = Helper.realUI.$refs.r0;
        Helper.DialogUI.getParamsNameUI("paramsname1").UI = Helper.realUI.$refs.r1;
        Helper.DialogUI.getParamsNameUI("paramsname2").UI = Helper.realUI.$refs.r2;
        Helper.DialogUI.getTextAreaUI("radiusarea").UI = Helper.realUI.$refs.r10;
        Helper.DialogUI.getTextAreaUI("startpointarea").UI = Helper.realUI.$refs.startpoint;
        Helper.DialogUI.getTextAreaUI("endpointarea").UI = Helper.realUI.$refs.endpoint;
        Helper.DialogUI.getParameterInputUI("radiusvalue").UI = Helper.realUI.$refs.r3;
        Helper.DialogUI.getParameterInputUI("sxvalue").UI = Helper.realUI.$refs.r4;
        Helper.DialogUI.getParameterInputUI("syvalue").UI = Helper.realUI.$refs.r5;
        Helper.DialogUI.getParameterInputUI("szvalue").UI = Helper.realUI.$refs.r6;
        Helper.DialogUI.getParameterInputUI("exvalue").UI = Helper.realUI.$refs.r7;
        Helper.DialogUI.getParameterInputUI("eyvalue").UI = Helper.realUI.$refs.r8;
        Helper.DialogUI.getParameterInputUI("ezvalue").UI = Helper.realUI.$refs.r9;
    }
};
Helper.observeProp('realUI', Helper.realUI);

function VisualVueComponentRegister() {
    const Options = {
        name: 'Visual',
        template: `<el-card class="plug visualization" v-show="show">
            <div id="DetectionContainer">
                <div class="title" ref="r0">可视点检测</div>
                <div id="ParamsContainer" class="ParamsContainer">
                    <div class="Params1">
                        <span class="ParamsName1" ref="r1">起点坐标：</span>
                        <div ref="r10" class="radiusValue"><input ref="r3" @input="ValueChange('radiusvalue')"></div>
                        <span ref="startpoint" class="startPointParamsValue">
                            <div class="XContainer"><span>X:</span><input ref="r4" @input="ValueChange('sxvalue')"></div>
                            <div class="XContainer"><span>Y:</span><input ref="r5" @input="ValueChange('syvalue')"></div>
                            <div class="XContainer"><span>Z:</span><input ref="r6" @input="ValueChange('szvalue')"></div>
                        </span>  
                    </div>
                    <div class="Params2">
                        <span class="ParamsName2" ref="r2">终点坐标：</span>
                        <span ref="endpoint" class="endPointParamsValue">
                            <div class="XContainer"><span>X:</span><input ref="r7" @input="ValueChange('exvalue')"></div>
                            <div class="YContainer"><span>Y:</span><input ref="r8" @input="ValueChange('eyvalue')"></div>
                            <div class="ZContainer"><span>Z:</span><input ref="r9" @input="ValueChange('ezvalue')"></div>
                        </span>
                    </div>
                </div>
            </div>
        </el-card>`,
        data() {
            return {
                show: false,
                lastNowTime: 0,
                NowTime: 0,
                timer: null,
                Delay: 800
            };
        },
        mounted() {
            this.$store.dispatch("addPlug", {
                name: this.$options.name,
                value: this,
                title: "可视化分析",
                isIndependent: true,
                isActive: false,
                icon: "fa fa-pencil-square-o",
                children: [{
                        title: "点分析",
                        type: "pointVisual",
                        icon: "fa fa-circle-o",
                        isActive: false,
                    },
                    {
                        title: "平面分析",
                        type: "planeVisual",
                        icon: "fa fa-vine",
                        isActive: false,
                    },
                    {
                        title: "空间分析",
                        type: "spaceVisual",
                        // icon: 'fa fa-arrows-h',
                        icon: "fa fa-arrows",
                        isActive: false,
                    }
                ],
            });
            // 绑定UI
            Helper.realUI = this;
        },
        destroyed() {
            this.$store.dispatch("removePlug", this.$options.name);
        },
        methods: {
            ValueChange(id:string) {
                if (this.lastNowTime == 0 && this.NowTime == 0) {
                    this.lastNowTime = (new Date).getTime()
                    let TimeDiff = this.lastNowTime - this.NowTime
                    if (TimeDiff < this.Delay) {
                        clearTimeout(this.timer)
                        this.timer = setTimeout(() => {
                            const value = Helper.DialogUI.getParameterInputUI(id).UI.value;
                            Helper.DialogUI.getParameterInputUI(id).onValChange(value);
                        }, this.Delay)
                    } else {
                        this.timer = setTimeout(() => {
                            const value = Helper.DialogUI.getParameterInputUI(id).UI.value;
                            Helper.DialogUI.getParameterInputUI(id).onValChange(value);
                        }, this.Delay)
                    }
                } else if (this.lastNowTime != 0 && this.NowTime == 0) {
                    this.NowTime = (new Date).getTime()
                    let TimeDiff = this.NowTime - this.lastNowTime
                    if (TimeDiff < 1000) {
                        clearTimeout(this.timer)
                        this.timer = setTimeout(() => {
                            const value = Helper.DialogUI.getParameterInputUI(id).UI.value;
                            Helper.DialogUI.getParameterInputUI(id).onValChange(value);
                        }, this.Delay)
                    } else {
                        this.timer = setTimeout(() => {
                            const value = Helper.DialogUI.getParameterInputUI(id).UI.value;
                            Helper.DialogUI.getParameterInputUI(id).onValChange(value);
                        }, this.Delay)
                    }
                    this.lastNowTime = this.NowTime
                    this.NowTime = 0
                }
            }
        },
    };
    Vue.component(Options.name, Options);
}

function VisualCreator() {
    //Vue 注册全局组件
    VisualVueComponentRegister();
    Helper.DialogUI = new VueDialog('ViusalAnalysisDialog', null);
    const HeadTitle = new VueTitle(ChildID.HeadTitle, null, Helper.DialogUI);
    const ParamsName1 = new VueStaticText("paramsname1", null, Helper.DialogUI);
    const ParamsName2 = new VueStaticText("paramsname2", null, Helper.DialogUI);
    const RadiusArea = new VueTextArea("radiusarea", null, Helper.DialogUI);
    const StartPointArea = new VueTextArea("startpointarea", null, Helper.DialogUI);
    const EndPointArea = new VueTextArea("endpointarea", null, Helper.DialogUI);
    const RadiusInput = new VueParameterInput("radiusvalue", null, Helper.DialogUI);
    const SXInput = new VueParameterInput("sxvalue", null, Helper.DialogUI);
    const SYInput = new VueParameterInput("syvalue", null, Helper.DialogUI);
    const SZInput = new VueParameterInput("szvalue", null, Helper.DialogUI);
    const EXInput = new VueParameterInput("exvalue", null, Helper.DialogUI);
    const EYInput = new VueParameterInput("eyvalue", null, Helper.DialogUI);
    const EZInput = new VueParameterInput("ezvalue", null, Helper.DialogUI);
    Helper.DialogUI.appendChild(HeadTitle);
    Helper.DialogUI.appendChild(ParamsName1);
    Helper.DialogUI.appendChild(ParamsName2);
    Helper.DialogUI.appendChild(RadiusArea);
    Helper.DialogUI.appendChild(StartPointArea);
    Helper.DialogUI.appendChild(EndPointArea);
    Helper.DialogUI.appendChild(RadiusInput);
    Helper.DialogUI.appendChild(SXInput);
    Helper.DialogUI.appendChild(SYInput);
    Helper.DialogUI.appendChild(SZInput);
    Helper.DialogUI.appendChild(EXInput);
    Helper.DialogUI.appendChild(EYInput);
    Helper.DialogUI.appendChild(EZInput);
    return Helper.DialogUI;
}
BasicUICreatorFactory.RegisterCreator('Visual', VisualCreator);