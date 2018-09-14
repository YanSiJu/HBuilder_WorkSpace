angular.module("myapp", []).controller('userCtrl', function($scope) {
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.repasswd = "";
	$scope.passwd = "";
	$scope.users = [{
			id: 1,
			FirstName: 'Hege',
			LastName: "Pege"
		},
		{
			id: 2,
			FirstName: 'Kim',
			LastName: "Pim"
		},
		{
			id: 3,
			FirstName: 'Sal',
			LastName: "Smith"
		},
		{
			id: 4,
			FirstName: 'Jack',
			LastName: "Jones"
		},
		{
			id: 5,
			FirstName: 'John',
			LastName: "Doe"
		},
		{
			id: 6,
			FirstName: 'Peter',
			LastName: "Pan"
		}
	];
	$scope.edit = true;

	$scope.editUser = function(id) {
		if(id == 'new') {
			$scope.edit = true;
			var u = {};
			$scope.firstName = '';
			$scope.lastName = '';
		} else {
			$scope.edit = false;
			$scope.firstName = $scope.users[id - 1].FirstName;
			$scope.lastName = $scope.users[id - 1].LastName;
		}
	};

	$scope.addUser = function() {
		var len = $scope.users.length;
		var u = $scope.users[len - 1];
		console.log(u);
		if($scope.edit == true) {
			var len = $scope.users.len;
			var user = {};
			user.id = u.id + 1;
			user.FirstName = $scope.firstName;
			user.LastName = $scope.lastName;
			$scope.users.push(user);
			console.log($scope.users);
		}
	};

	$scope.$watch('firstName', function() {
		$scope.test();
	});
	$scope.$watch('lastName', function() {
		$scope.test();
	});
	$scope.$watch('passwd', function() {
		$scope.test();
	});
	$scope.$watch('repasswd', function() {
		$scope.test();
	});

	$scope.test = function() {

		if($scope.passwd != $scope.repasswd) {
			$scope.error = true;
		} else {
			$scope.error = false;
		}

		$scope.incompleted = false;
		if($scope.edit) {
			if(!$scope.firstName.length || !$scope.lastName.length || !$scope.passwd.length || !$scope.repasswd.length) {
				$scope.incompleted = true;
			}
		} else {
			if(!$scope.passwd.length || !$scope.repasswd.length) {
				$scope.incompleted = true;
			}
		}
	};
});