angular.module('portfolio').controller('landingCtrl', function($scope, mainService, $location, $anchorScroll) {

$scope.showMoreString = "Click to show more stories by me.";

$scope.ToggleShowMore = function(){
 $scope.showMoreStories = !$scope.showMoreStories;
 $scope.showMoreString = "Click to show less";
};

  $scope.pageJump = function(id) {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash(id);

        // call $anchorScroll()
        $anchorScroll();
      };

  $scope.headShot = mainService.headShot;
  $scope.intro = mainService.intro;
  $scope.projects = mainService.projects;
  $scope.bioTitle = mainService.bioTitle;
  $scope.p1 = mainService.p1;
  $scope.p2 = mainService.p2;
  $scope.p3 = mainService.p3;
  $scope.p4 = mainService.p4;
  $scope.p5 = mainService.p5;
});
