(function () {
    var app = angular.module('CrimeWatch',[]);
    
    app.controller('CrimeWatchCtrl',['$scope','$http', function ($scope, $http) {
            $scope.query = '52240';
            $scope.range="1";
            $scope.isZip = true;
            $scope.modelData = [];
            $scope.submitted = false;
            
            var urlRoot = 'https://www.iowasexoffender.com/api/search/results.json?';
            var policeUrlRoot ='https://api.foursquare.com/v2/venues/explore?client_id=4OKAHWGA2EIYABF430TOGDEXYDO41B4ZXQQ04RM5JQEP0W32&client_secret=MO054C3YBSPISY3XENXQQVD5NJOGFCKTRNXK2HQOKMPFZ2BN&v=20170511&section=police&near=';
//            $scope.options = [];
//
//            //Fill array with incremental numbers
//            while ($scope.options.length < 100){
//              $scope.options.push($scope.options.length + 1);
//            }
//           $scope.range = $scope.options[1];
            
            $scope.getData = function(){
            	$scope.submitted=true;
                var url = '';
                if ($scope.isZip)
                    url = urlRoot + 'userpostal=' + $scope.query + '&range=' +$scope.range;
                else url = urlRoot + 'usercity=' + $scope.query + '&range=' +$scope.range;
                
                console.log(url);
                console.log("Is zip? "+$scope.isZip);
                
                $http({
                    url: url,
                    cache: false
                }).then(function(data){
                      $scope.modelData = data.data.records;
                      successCallBack();
                  });
                  
                
            };
            
            function successCallBack(){
                console.log($scope.modelData);
                //$('#chartArea').show();
            }
            
            $scope.policeStations={};
            $scope.getPolice = function(){
            	if (!$scope.isZip){
            		var radius = parseInt($scope.range,10)*1609;
            		//var url = policeUrlRoot + $scope.query;
            		var url = 'https://api.foursquare.com/v2/venues/explore?client_id=4OKAHWGA2EIYABF430TOGDEXYDO41B4ZXQQ04RM5JQEP0W32&client_secret=MO054C3YBSPISY3XENXQQVD5NJOGFCKTRNXK2HQOKMPFZ2BN&v=20170511&section=police&near=Des+Moines';
            		console.log(url);
            		$http({
            			url:url,
            			cache:false
            		}).then(function(data){
            			$scope.policeStations=data.data.response.groups.items;//.response.groups.items;
            			console.log($scope.policeStations);
            			//displayPolice();
            		});
            	}
            	
            };
            
            $scope.getNhoodCharacteristics = function(){
    			var audio= new Audio ('https://esllearning2.mybluemix.net/Analyze?badguys='+ $scope.modelData.length+'&city='+$scope.query);
    			audio.play();
			};
			
//			function displayPolice(){
//				var items = [];
//				items = $scope.policeStations.data.response.groups.items;
//			}
    }]);

//    app.filter("minmax", function() {
//        return function(arr, min, max) {    
//          min = parseInt(min);
//          max = parseInt(max);
//          for(var i=min; i <= max; i++){
//             arr.push(i);
//          }
//          return arr;
//        };
//     });
})();
