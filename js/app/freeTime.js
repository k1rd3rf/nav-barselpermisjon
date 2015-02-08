define(['knockout', 'text!view/freeTime.html'], function (ko, view) {
    'use strict';


    var FreeTime = function (options) {
        var freeTime = this,
            defaults = {
                vacationDays: ko.observable(0),
                permWeeks: ko.observable(10),
                title: ko.observable(),
                maxWeeks: ko.observable(36)
            };

        freeTime.options = ko.utils.extend(defaults, options);

        freeTime.vacationDays = freeTime.options.vacationDays;
        freeTime.permWeeks = freeTime.options.permWeeks;
        freeTime.title = freeTime.options.title;

        freeTime.permWeeks.extend({
            min: 10,
            max: freeTime.options.maxWeeks
        });

        freeTime.isPermWeeksComputed = ko.computed(function () {
            return ko.isComputed(freeTime.permWeeks);
        });

    }, componentName = 'free-time';

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return FreeTime;
});