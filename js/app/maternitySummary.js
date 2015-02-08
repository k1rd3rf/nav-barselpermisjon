define(['knockout', 'text!view/maternitySummary.html'], function (ko, view) {
    'use strict';


    var componentName = 'maternity-leave-summary',
        MaternitySummary = function (options) {
            var leave = this,
                defaults = {};

            leave.options = ko.utils.extend(defaults, options);
            leave.name = componentName;
        };

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return MaternitySummary;
});