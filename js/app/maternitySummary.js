define(['knockout', 'vis', 'text!view/maternitySummary.html', 'i18n!nls/maternitySummery'], function (ko, vis, view, text) {
    'use strict';

    var componentName = 'maternity-leave-summary',
        MaternitySummary = function (options) {
            var leave = this,
                defaults = {},
                groups = new vis.DataSet([
                    {id: 'mother', content: text.mother},
                    {id: 'father', content: text.father}
                ]),
                items = new vis.DataSet({
                    type: {start: 'ISODate', end: 'ISODate'}
                }),
                visOptions = {
                    editable: true
                };

            leave.options = ko.utils.extend(defaults, options);
            leave.name = componentName;
            leave.timeline = null;
            leave.initialize = function () {
                if (!leave.timeline) {
                    var visElm = document.getElementById('maternitySummaryVis');
                    leave.timeline = new vis.Timeline(visElm, items, groups, visOptions);
                }
            };
            return leave;
        };

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return MaternitySummary;
});