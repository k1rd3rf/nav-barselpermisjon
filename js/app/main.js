define(['knockout', 'knockout.validation', 'jquery', 'moment', 'app/inputForm', 'kvLocale/nb-NO'], function (ko, kv, $, moment, InputForm) {
    'use strict';

    var viewModel = {};

    viewModel.formData = {
        birthDate: ko.observable(moment()),
        dueDate: ko.observable(moment())
    };

    viewModel.form = new InputForm(viewModel.formData);

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