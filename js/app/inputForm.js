define(['knockout', 'app/freeTime', 'moment', 'text!view/inputForm.html'], function (ko, FreeTime, moment, view) {
    'use strict';


    var InputForm = function (options) {
        var form = this,
            defaults = {
                birthDate: ko.observable(moment().format("dd/mm/yyyy"))
            };

        form.options = ko.utils.extend(defaults, options);

        form.permSelect = {
            options: ko.observableArray([
                {
                    weeks: 46,
                    salary: 100,
                    description: "Kort"
                },
                {
                    weeks: 56,
                    salary: 80,
                    description: "Lang"
                }
            ]),
            render: function (item) {
                return item.description + " (" + item.weeks + " uker)";
            },
            selected: ko.observable()
        };

        form.mothersAmount = ko.observable(37);

        form.fathersAmount = ko.computed(function () {
            return (form.permSelect.selected() || {}).weeks - form.mothersAmount();
        });

        form.maxWeeks = ko.computed(function () {
            return (form.permSelect.selected() || {}).weeks - 10;
        });

        form.birthDate = form.options.birthDate;
        form.birthDate.extend({
            date: true
        });

        form.freeTime = {
            mother: new FreeTime({
                title: "Mor",
                permWeeks: form.mothersAmount,
                maxWeeks: form.maxWeeks
            }),
            father: new FreeTime({
                title: "Far",
                permWeeks: form.fathersAmount,
                maxWeeks: form.maxWeeks
            })
        };
    }, componentName = 'input-form';

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return InputForm;
});