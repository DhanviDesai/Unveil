class User(object):
    def __init__(self, id_name, name, username, repo_count, repos_url, avatar_url, html_url, followers, following):
        self._id = id_name
        self.username = username
        self.repo_count = repo_count
        self.repos_url = repos_url
        self.avatar_url = avatar_url
        self.html_url = html_url
        self.followers = followers
        self.following = following
        self.name = name

    
    # @property
    # def username(self):
    #     return self.__username
    
    # @username.setter
    # def username(self,value):
    #     self.__username = value
    
    # @property
    # def repo_count(self):
    #     return self.__repo_count
    
    # @repo_count.setter
    # def repo_count(self,value):
    #     self.__repo_count = value
    
    # @property
    # def repos_url(self):
    #     return self.__repos_url
    
    # @repos_url.setter
    # def repos_url(self,value):
    #     self.__repos_url = value