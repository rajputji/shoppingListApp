myApp.controller('mainController', function ($scope) {
    // console.log($scope);
    $scope.list = [];
    $scope.loggedin = false;
    $scope.users = [
        // {
        //     name: "Abhishek",
        //     username: "abhi",
        //     password: "abhi",
        //     email: "abhi@gmail.com",
        //     shoppinglist: ['item1', 'item2', 'item3']
        // }
    ];
    $scope.userIndex = -1;
    $scope.user = {};


    if (!$scope.loggedin) {
        window.location.href = "#!";
    }

    $scope.register = (user) => {
        user.shoppinglist = [];
        $scope.users.push(user);
        alert("user saved successfully! you can login now");
        window.location.href = "#!login";
    };

    $scope.login = (user) => {


        for (var i = 0; i < $scope.users.length; i++) {
            let u = $scope.users[i];
            if (u.username === user.username && u.password === user.password) {
                $scope.loggedin = true;
                $scope.userIndex = i;
                $scope.user = u;
                alert("Logged in successfully!");
                window.location.href = "#!shoppinglist";
                break;
            }
        }

        if ($scope.loggedin === false) {
            alert("User not registered! Please register first");
            return false;
        }
    };

    $scope.logout = () => {
        $scope.loggedin = false;
        $scope.userIndex = -1;
        window.location.href = "#!";
    }

    $scope.addItem = function (item) {
        $scope.errortext = "";
        if (!item) { return; }
        if ($scope.loggedin === true) {
            if ($scope.users[$scope.userIndex].shoppinglist.indexOf(item) === -1) {
                $scope.users[$scope.userIndex].shoppinglist.push(item);
                $scope.item = '';
            }
            else {
                $scope.errortext = "The item is already in your shopping list.";
            }
        }
        else {
            $scope.logout();
        }
    };

    $scope.removeItem = function (index) {
        $scope.errortext = "";
        if ($scope.loggedin === true) {
            $scope.users[$scope.userIndex].shoppinglist.splice(index, 1);
        }
        else {
            $scope.logout();
        }
    }
});

myApp.controller('registerController', function ($scope) {
    $scope.user = {};
});

myApp.controller('loginController', function ($scope) {
    $scope.user = {};
});