gitApp.service("gitService", gitService);
gitService.$inject = ["$http"];

function gitService($http) {
    this.getUser = function(searchTerm) {
        return $http.get("https://api.github.com/users/" + searchTerm);
    }
    this.showAllRepos = function(url) {
        return $http.get(url);
    }
}
