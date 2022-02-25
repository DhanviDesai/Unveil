class Repo(object):
    def __init__(self,username,repo_name,stargazers_count,forks_count,language,languages_url,html_url):
        self.username = username
        self.repo_name = repo_name
        self.stargazers_count = stargazers_count
        self.forks_count = forks_count
        self.language = language
        self.languages_url = languages_url
        self.html_url = html_url
    
    # @property
    # def username(self):
    #     return self.__username
    
    # @username.setter
    # def username(self,value):
    #     self.__username = value
    
    # @property
    # def repo_name(self):
    #     return self.__repo_name
    
    # @repo_name.setter
    # def repo_name(self,value):
    #     self.__repo_name = value
    
    # @property
    # def stargazers_count(self):
    #     return self.__stargazers_count

    # @stargazers_count.setter
    # def stargazers_count(self,value):
    #     self.__stargazers_count = value
    
    # @property
    # def forks_count(self):
    #     return self.__forks_count
    
    # @forks_count.setter
    # def forks_count(self,value):
    #     self.__forks_count = value
    
    # @property
    # def language(self):
    #     return self.__language
    
    # @language.setter
    # def language(self,value):
    #     self.__language = value
    
    # @property
    # def languages_url(self):
    #     return self.__languages_url
    
    # @languages_url.setter
    # def languages_url(self,value):
    #     self.__languages_url = value
    
    # @property
    # def html_url(self):
    #     return self.__html_url
    
    # @html_url.setter
    # def html_url(self,value):
    #     self.__html_url = value        