define(['knockout', 'app/maternityLeave', 'moment', 'text!view/inputForm.html'], function (ko, MaternityLeave, moment, view) {
    'use strict';


    var InputForm = function (options) {
        var form = this,
            defaults = {
                birthDate: ko.observable(moment().format("dd/mm/yyyy")),
                dueDate: ko.observable()
            };

        form.options = ko.utils.extend(defaults, options);

        form.permSelect = {
            options: ko.observableArray([
                {
                    weeks: 49,
                    salary: 100,
                    description: "Kort"
                },
                {
                    weeks: 59,
                    salary: 80,
                    description: "Lang"
                }
            ]),
            render: function (item) {
                return item.description + " (" + item.weeks + " uker)";
            },
            selected: ko.observable()
        };

        form.mothersAmount = ko.observable(39);

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

        form.dueDate = form.options.dueDate;
        form.dueDate.extend({
            date: true
        });

        form.maternityLeave = {
            mother: new MaternityLeave({
                title: "Mor",
                leaveWeeks: form.mothersAmount,
                maxWeeks: form.maxWeeks
            }),
            father: new MaternityLeave({
                title: "Far",
                leaveWeeks: form.fathersAmount,
                maxWeeks: form.maxWeeks
            })
        };
    }, componentName = 'input-form';

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return InputForm;
});