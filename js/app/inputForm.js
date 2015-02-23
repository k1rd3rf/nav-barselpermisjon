define(['knockout', 'app/maternityLeave', 'text!view/inputForm.html', 'i18n!nls/inputForm'], function (ko, MaternityLeave, view, text) {
    'use strict';


    var componentName = 'input-form',
        InputForm = function (options) {
            var form = this,
                defaults = {
                    birthDate: ko.observable(),
                    dueDate: ko.observable()
                };

            form.options = ko.utils.extend(defaults, options);
            form.text = text;

            form.permSelect = {
                options: ko.observableArray([
                    {
                        weeks: 49,
                        salary: 100,
                        description: form.text.short
                    },
                    {
                        weeks: 59,
                        salary: 80,
                        description: form.text.long
                    }
                ]),
                render: function (item) {
                    return item.description.replace("{0}", item.weeks);
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
                    title: form.text.mother,
                    leaveWeeks: form.mothersAmount,
                    maxWeeks: form.maxWeeks
                }),
                father: new MaternityLeave({
                    title: form.text.father,
                    leaveWeeks: form.fathersAmount,
                    maxWeeks: form.maxWeeks
                })
            };
            form.name = componentName;
        };

    if (!ko.components.isRegistered(componentName)) {
        ko.components.register(componentName, {template: view});
    }

    return InputForm;
});