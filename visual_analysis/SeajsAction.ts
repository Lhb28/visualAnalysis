"use strict";
(window as any).define(function (require, exports, module) {
    const eventBus = require('../../utils/event_bus');
    const VisualView = (window as any).Backbone.View.extend({
        initPlug: function () {
            eventBus.trigger('addPlug', {
                name: 'plug_visual',
                title: '可视化分析',
                value: this,
                icon: 'fa fa-pencil',
                isIndependent: true,
                children: [{
                        title: "可视点分析",
                        type: "pointVisual",
                        icon: "fa fa-circle-o",
                        isActive: false,
                    },
                    {
                        title: "可视平面分析",
                        type: "planeVisual",
                        icon: "fa fa-vine",
                        isActive: false,
                    },
                    {
                        title: "可视空间分析",
                        type: "spaceVisual",
                        icon: "fa fa-arrows",
                        isActive: false,
                    },
                ]
            });
        }
    });
    const visualizationView = new VisualView();
    const MeasurementAction = {
        start: function (f1, f2) {
            visualizationView.initPlug();
            visualizationView.activate = f1;
            visualizationView.deactivate = f2;
        }
    };
    module.exports = MeasurementAction;
});
