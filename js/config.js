requirejs.config({
    "baseUrl": "js",
    "paths": {
        "text": "../bower_components/requirejs-text/text",
        "i18n": "../bower_components/requirejs-i18n/i18n",
        "domReady": "../bower_components/requirejs-domready/domReady",
        "moment": "../bower_components/moment/min/moment.min",
        "underscore": "../bower_components/underscore/underscore-min",
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap.min",
        "knockout": "../bower_components/knockout/dist/knockout",
        "knockout.validation": "../bower_components/knockout-validation/dist/knockout.validation.min",
        "kvLocale": "../bower_components/knockout-validation/localization/",
        "vis": "../bower_components/vis/dist/vis.min"
    },
    locale: "nb-NO",
    shim: {
        "bootstrap": {"deps": ['jquery']}
    },
    config: {
        moment: {
            noGlobal: true
        }
    }
});


define(["app/main", "knockout", "domReady!"], function (Main, ko) {
    'use strict';
    var main = new Main(),
        container = document.getElementsByClassName('container')[0];
    main.init();
    ko.applyBindings(main, container);
});