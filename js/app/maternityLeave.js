define(['knockout', 'text!view/maternityLeave.html'], function (ko, view) {
    'use strict';


    var MaternityLeave = function (options) {
        var leave = this,
            defaults = {
                vacationDays: ko.observable(),
                leaveWithoutPay: ko.observable(),
                leaveWeeks: ko.observable(10),
                title: ko.observable(),
                maxWeeks: ko.observable(36)
            };

        leave.options = ko.utils.extend(defaults, options);

        leave.vacationDays = leave.options.vacationDays;
        leave.leaveWeeks = leave.options.leaveWeeks;
        leave.leaveWithoutPay = leave.options.leaveWithoutPay;
        leave.title = leave.options.title;

        leave.leaveWeeks.extend({
            min: 10,
            max: leave.options.maxWeeks
        });

        leave.isPermWeeksComputed = ko.computed(function () {
            return ko.isComputed(leave.leaveWeeks);
        });

    }, componentName = 'maternity-leave-parent';

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return MaternityLeave;
});