define(['knockout', 'knockout.validation', 'moment', 'app/inputForm', 'app/maternitySummary', 'i18n!nls/main', 'kvLocale/nb-NO'], function (ko, kv, moment, InputForm, MaternitySummary, text) {
    'use strict';

    var Main = function () {
        var viewModel = {};

        viewModel.formData = {
            birthDate: ko.observable(moment()),
            dueDate: ko.observable(moment())
        };

        viewModel.form = new InputForm(viewModel.formData);
        viewModel.summary = new MaternitySummary();

        viewModel.text = text;
        viewModel.init = function () {
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
        };

        return viewModel;
    };

    return Main;
});