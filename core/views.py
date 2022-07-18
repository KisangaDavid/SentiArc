from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .scripts.modifiedTwitterAPI import getTweets
from .scripts.customGoogleNewsAPI import GetNewsLink

    
def front(request):
    context = {
        }

    return render(request, "index.html", context)

@api_view(['GET'])
def article(request):
    if request.method == 'GET':
        requestType = request.GET.get("requestType", "NO REQUEST TYPE")
        if requestType == "articles":
            companyName = request.GET.get("companyName", 'DDDDD')
            news = GetNewsLink(companyName) 
            jsonInfo = news.topXArticlesJson(10)
            return Response(jsonInfo)
        elif requestType == "tweets":
            companyName = request.GET.get("companyName", 'DDDDD')
            censorMode = request.GET.get("censorMode", "NOT FOUND")
            tweets = getTweets(companyName, 12)
            if censorMode == "true":
                print("Censor Mode On")
                # Run tweets through censor function
                return Response(tweets)
            else:
                print("Censor Mode Off")
                return Response(tweets)





