const tab = {
    template: '<div>{{ title }}</div>',
    scope: {
        title: '@'
    }
}

angular.module('app', []).components({ tab })