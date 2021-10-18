let inst = null;
const bt_plug_visual = {};

function init_plugin_visual(instance) {
    inst = instance;
    bt_plug_visual.pointActivate = pointActive;
    bt_plug_visual.planeActivate = planeActive;
    bt_plug_visual.spaceActivate = spaceActive;
    bt_plug_visual.deactivate = deactive;
    return bt_plug_visual;
}

function pointActive() {
    inst.show = true;
}

function planeActive() {
    inst.show = true;
}

function spaceActive() {
    inst.show = true;
}

function deactive() {
    inst.show = false;
}
export default init_plugin_visual;