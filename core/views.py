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
            tweets = getTweets(companyName, 10)
            return Response(tweets)


# @api_view(['DELETE'])
# def note_detail(request, pk):
#     try:
#         note = Notes.objects.get(pk=pk)
#     except Notes.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'DELETE':
#         note.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)





