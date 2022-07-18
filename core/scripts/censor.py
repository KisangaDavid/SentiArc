listofDictionaries = json_response.get("data")
for dict in listofDictionaries:
    tweetText = dict.get("text")
    censored = profanity.censor(tweetText)
    if censored == True:
        listofDictionaries.remove(dict)
