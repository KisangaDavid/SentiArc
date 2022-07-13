import requests
from bs4 import BeautifulSoup
import json

class GetNewsLink:
    def __init__(self, userInput):
        self.url = "https://news.google.com/search?q="
        firstWord = True
        splitInput = userInput.split()
        self.infoDict = {}
        for word in splitInput:
            if firstWord:
                self.url += word
                firstWord = False
            else:
                self.url += "%20" + word

    def getArticles(self, numArticles):
        r = requests.get(self.url)
        if r.status_code == 200:
           return self.parseSource(r.content, numArticles)

    def parseSource(self, source, numArticles):
        soup = BeautifulSoup(source,"lxml")
        return self.topXArticles(soup, numArticles)

    def topXArticles(self, soup, numArticles):
        articleDictList = []
        articles = soup.find_all(class_="ipQwMb ekueJc RD0gLb", limit=numArticles + 10)
        counter = 0
        for article in articles:
            if article.parent.parent.get("class") == ["SbNwzf", "eeoZZ"]:
                continue
            if counter >= numArticles:
                break
            counter += 1
            if article.parent.parent.get("class") == ["xrnccd", "F6Welf", "R7GTQ", "keNKEd", "j7vNaf"]:
                imgSource = article.parent.parent.next.next.next.attrs.get("src")
            else:
                imgSource = article.parent.parent.previous.attrs.get("src")
            containsAuthorAndTime = article.nextSibling
            author = containsAuthorAndTime.find(class_="wEwyrc AVN2gc uQIVzc Sksgp slhocf").text
            time = containsAuthorAndTime.find(class_="WW6dff uQIVzc Sksgp slhocf").text
            partialLink = article.find("a")
            partialLink = partialLink.attrs.get("href")
            completeLink = "https://news.google.com" + partialLink[1:]
            infoDict = {"title": article.text,"author": author, "time": time, "imgSource": imgSource, "completeLink" : completeLink}
            articleDictList.append(infoDict)
        return articleDictList

    def convertToJson(self, dictList):
        convertedData = json.dumps(dictList)
        return convertedData

    def topXArticlesJson(self, numArticles):
        articleDictList = self.getArticles(numArticles)
        convertedData = self.convertToJson(articleDictList)
        return convertedData


# list of dictionaries {"numSearches": xxx, 'month percent growth': xxx}