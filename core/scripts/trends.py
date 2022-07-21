from http.server import ThreadingHTTPServer
from pytrends.request import TrendReq
from regex import D
import pandas as pd
import json

pytrends = TrendReq(hl='en-US', tz = 360)

# inp = input(" Enter Company Name")
# all_keywords = [inp ]
#all_keywords = ['Klarna ', 'Uber', 'Google', 'Barnes & Noble', 'Amazon', 'Best Buy']

# keywords = [inp]
timeframes = ['today 5-y']


cat = '0'
geo = ''
gprop = ''

months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
#declare dictionary
d = {}



def compareYearAndMonth(obj):
    return (obj.year, obj.month)

def getTrends(company): 
    companyName = [company]
    pytrends.build_payload (companyName, cat, timeframes[0], geo, gprop)

    df = pytrends.interest_over_time()
    NewGrouping = df.groupby(compareYearAndMonth)[company].mean()
    listOfPopScores = NewGrouping.values.tolist()

    xAxisData = []
    for tuple in NewGrouping.index.tolist():
        xAxisData.append(months[tuple[1] - 1] + " '" + str(tuple[0])[2:])

    d["xAxisData"] = xAxisData
    d["listOfPopScores"] = listOfPopScores

    curWeek = df.iat[-1,0]
    lastWeek = df.iat[-2,0]
    weeklyChange = round(((curWeek - lastWeek) / lastWeek) * 100, 1)

    if weeklyChange > 0:
        weeklyChange = "+" + str(weeklyChange) 

    d["weeklyChange"] = weeklyChange

    curMonth = df.tail(4)
    curMonthAvg = round(curMonth.mean(), 2)[0]
    lastMonth = df[-8:-4]
    lastMonthAvg = round(lastMonth.mean(),2)[0]
    monthlyChange = round(((curMonthAvg - lastMonthAvg) / lastMonthAvg) * 100, 1)

    if monthlyChange > 0:
        monthlyChange = "+" + str(monthlyChange)

    d["monthlyChange"] = monthlyChange

    curYear = df.tail(52)
    curYearAvg = round(curYear.mean(), 2)[0]
    lastYear = df[-104:-52]
    lastYearAvg = round(lastYear.mean(),2)[0]
    yearlyChange = round(((curYearAvg - lastYearAvg) / lastYearAvg) * 100, 1)

    if yearlyChange > 0:
        yearlyChange = "+" + str(yearlyChange)

    d["yearlyChange"] = yearlyChange

    return json.dumps(d)