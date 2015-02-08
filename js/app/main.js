define(['knockout', 'knockout.validation', 'jquery', 'app/inputForm', 'kvLocale/nb-NO'], function (ko, kv, $, InputForm) {
    'use strict';

    var viewModel = {};

    viewModel.formData = {birthDate: ko.observable(new Date())};

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