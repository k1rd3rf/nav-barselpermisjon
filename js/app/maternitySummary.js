define(['knockout', 'vis', 'jquery', 'text!view/maternitySummary.html', 'domReady!'], function (ko, vis, $, view) {
    'use strict';

    var componentName = 'maternity-leave-summary',
        MaternitySummary = function (options) {
            var leave = this,
                defaults = {};

            leave.options = ko.utils.extend(defaults, options);
            leave.name = componentName;


            leave.groups = new vis.DataSet([
                {id: 'mother', content: 'mother'},
                {id: 'father', content: 'father'}
            ]);

            leave.items = new vis.DataSet({
                type: {start: 'ISODate', end: 'ISODate'}
            });

            leave.options = {};
            //leave.timeline = new vis.Timeline($('.maternitySummaryVis'), leave.items, leave.groups, leave.options);

        };

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return MaternitySummary;
});