from better_profanity import profanity


def censor(returnDict):
    profanity.load_censor_words()
    tweets = returnDict.get("data")
    for dict in tweets:
        tweetText = dict.get("text")
        containsProfanity = profanity.contains_profanity(tweetText)
        if containsProfanity:
            tweets.remove(dict)
            print("DELETED ENTRY:")
            print(tweetText)
    return returnDict
