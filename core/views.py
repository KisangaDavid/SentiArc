from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework import status
# from .serializers import NewsArticleSerializer
# from .models import NewsArticle
from .scripts.customGoogleNewsAPI import GetNewsLink

    
def front(request):
    context = {
        }

    return render(request, "index.html", context)

@api_view(['GET'])
def article(request):
    if request.method == 'GET':
        companyName = request.GET.get("companyName", 'DDDDD')
        news = GetNewsLink(companyName) 
        jsonInfo = news.topXArticlesJson(8)
        return Response(jsonInfo)


# @api_view(['DELETE'])
# def note_detail(request, pk):
#     try:
#         note = Notes.objects.get(pk=pk)
#     except Notes.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'DELETE':
#         note.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)





