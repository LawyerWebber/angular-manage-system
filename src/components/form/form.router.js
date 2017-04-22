/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */
(function () {
    'use strict';
    angular.module('app.form').run(appRun);
    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'main.form',
            config: {
                url: '/form',
                views: {
                    'section@main': {
                        templateUrl: 'dist/tpls/form/form.html',
                        controller: 'formCtrl as vm'
                    }
                }
            }
        }];
    }
})();
