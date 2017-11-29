'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.bool = true;
        $scope.mystyle = { color: 'red' };
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortOrder = 'name';
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
                    duration: 1,
                    level: 'Level 1',
                    abstract: 'Abstract 1, Level 2',
                    upvoteCount: 0
                },
                {
                    name: 'Session 2',
                    creatorName: 'Creator Name 2',
                    duration: 2,
                    level: 'Level 2',
                    abstract: 'Abstract 2',
                    upvoteCount: 0
                },
                {
                    name: 'Session 3',
                    creatorName: 'Creator Name 3',
                    duration: 3,
                    level: 'Level 3',
                    abstract: 'Abstract 3',
                    upvoteCount: 0
                },
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upvoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upvoteCount--;
        };
    }
);