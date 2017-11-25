'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Event Name',
            date: '2017/11/23',
            time: '23:57',
            location: {
                address: "Street Address",
                city: "City Address",
                province: "Province Address"
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Session 1',
                    creatorName: 'Creator Name 1',
                    duration: 'Duration 1',
                    level: 'Level 1',
                    abstract: 'Abstract 1'
                },
                {
                    name: 'Session 2',
                    creatorName: 'Creator Name 2',
                    duration: 'Duration 2',
                    level: 'Level 2',
                    abstract: 'Abstract 2'
                },
                {
                    name: 'Session 3',
                    creatorName: 'Creator Name 3',
                    duration: 'Duration 3',
                    level: 'Level 3',
                    abstract: 'Abstract 3'
                },
            ]
        }
    }
);