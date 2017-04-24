gitApp.controller("gitUsersCtrl", gitUsersCtrl);
gitController.$inject = ["gitService"];

function gitUsersCtrl(gitService) {
    var vm = this;
    vm.searchTerm;
    vm.userInfo = {};
    vm.isUserSearch = false;
    vm.noUserFound;
    vm.repos = [];
    vm.getUser = function() {
        vm.isUserSearch = true;
        vm.repos = [];
        gitService.getUser(vm.searchTerm)
            .then(function(successResponse) {
                    vm.noUserFound = false;
                    vm.userInfo = {
                        name: successResponse.data.name,
                        avatar_url: successResponse.data.avatar_url,
                        followers: successResponse.data.followers,
                        following: successResponse.data.following,
                        created_at: successResponse.data.created_at,
                        repos_url: successResponse.data.repos_url
                    };
                },
                function(errorResponse) {
                    vm.noUserFound = true;
                });
    };

    vm.showAllRepos = function(reposUrl) {
        gitService.showAllRepos(reposUrl)
            .then(function(successResponse) {
                    console.log(successResponse.data);
                    vm.repos = successResponse.data;
                },
                function(errorResponse) {
                    console.error(errorResponse);
                    vm.repos = [];
                });
    };
}
