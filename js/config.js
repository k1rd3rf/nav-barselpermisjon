requirejs.config({
    "baseUrl": "js",
    "paths": {
        "text": "../bower_components/requirejs-text/text",
        "moment": "../bower_components/moment/min/moment.min",
        "underscore": "../bower_components/underscore/underscore-min",
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap.min",
        "knockout": "../bower_components/knockout/dist/knockout",
        "knockout.validation": "../bower_components/knockout-validation/dist/knockout.validation.min",
        "kvLocale": "../bower_components/knockout-validation/localization/",
        "i18next": "../bower_components/i18next/i18next.amd.min"
    },
    shim: {
        "bootstrap": {"deps": ['jquery']}
    },
    config: {
        moment: {
            noGlobal: true
        }
    }
});