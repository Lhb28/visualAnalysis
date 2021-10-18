import { BasicUI } from '../BasicUIClass.js';
var ChildID;
(function(ChildID) {
    ChildID["HeadTitle"] = "headTitle";
})(ChildID || (ChildID = {}));;
class VueBasicUI extends BasicUI {
    UI;
    constructor(id, type, UI, parent, show) {
        super(id, type, parent, show);
        this.UI = UI;
        this.observeProp('show', show);
    };
    observeProp(key, val) {
        Object.defineProperty(this, key, {
            get() {
                return val;
            },
            set(nv) {
                if (val === nv)
                    return;
                val = nv;
                this.updateUI();
            }
        });
    };
    UpdateUI() {};
}
class VueVisualAnalysisDialog extends VueBasicUI {
    children = new Map;
    constructor(id, UI, show) {
        super(id, 'Dialog', UI, null, show);
    }
    appendChild(child) {
        child.parent = this;
        this.children.set(child.id, child);
    };
    getChild(id) {
        if (!this.children.has(id))
            return null;
        return this.children.get(id);
    };
    getHeadTitleUI() {
        if (!this.children.has(ChildID.HeadTitle))
            return null;
        return this.children.get(ChildID.HeadTitle);
    };
    getParamsNameUI(id) {
        if (!this.children.has(id))
            return null;
        return this.children.get(id);
    };
    getTextAreaUI(id) {
        if (!this.children.has(id))
            return null;
        return this.children.get(id);
    };
    getParameterInputUI(id) {
        if (!this.children.has(id))
            return null;
        return this.children.get(id);
    };
}
export { VueBasicUI, VueVisualAnalysisDialog, ChildID };