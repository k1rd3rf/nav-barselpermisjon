define(['knockout', 'vis', 'text!view/maternitySummary.html'], function (ko, vis, view) {
    'use strict';

    var componentName = 'maternity-leave-summary',
        MaternitySummary = function (options) {
            var leave = this,
                defaults = {},
                groups = new vis.DataSet([
                    {id: 'mother', content: 'mother'},
                    {id: 'father', content: 'father'}
                ]),
                items = new vis.DataSet({
                    type: {start: 'ISODate', end: 'ISODate'}
                }),
                visOptions = {};

            leave.options = ko.utils.extend(defaults, options);
            leave.name = componentName;
            leave.initialize = function () {
                var visElm = document.getElementsByClassName('maternitySummaryVis');
                //leave.timeline = new vis.Timeline(visElm, items, groups, visOptions);
            };
        };

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return MaternitySummary;
});