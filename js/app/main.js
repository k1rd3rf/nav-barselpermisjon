define(['knockout', 'knockout.validation', 'jquery', 'moment', 'app/inputForm', 'app/maternitySummary', 'locale/nb-NO', 'kvLocale/nb-NO'], function (ko, kv, $, moment, InputForm, MaternitySummary, text) {
    'use strict';

    var viewModel = {};

    viewModel.formData = {
        birthDate: ko.observable(moment()),
        dueDate: ko.observable(moment())
    };

    viewModel.form = new InputForm(viewModel.formData);
    viewModel.summary = new MaternitySummary();
    viewModel.text = text().main;

    ko.bindingHandlers.toJSON = {
        update: function (element, valueAccessor) {
            return ko.bindingHandlers.text.update(element, function () {
                return ko.toJSON(valueAccessor(), null, 2);
            });
        }
    };

    kv.init({
        errorElementClass: 'has-warning',
        errorMessageClass: 'help-block'
    });
    kv.locale('nb-NO');

    ko.applyBindings(viewModel);
});