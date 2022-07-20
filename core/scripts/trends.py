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

    mean = round(df.mean(),2)
    avg = round(df[company][-52:].mean(),2)
    avg2 = round(df[company][:52].mean(),2)
    trend = round(((avg/mean[company])-1)*100,2)
    trend2 = round(((avg/avg2)-1)*100,2)
    

    #print('The average 5 years interst of ' + company + ' was ' + str(mean[company]))
    d["avg5years:" ] = str(mean[company])

    #print('The last year interst of ' + company + ' compared to the last 5 years'
         #+ ' has changed ' + str(trend) + '%.') 
    perc = str(trend) + "%"
    d["lastvs5yearpercent:"] = perc

    

    #stable trend
    if mean[company] > 75 and abs(trend) <= 5:

        
        stre = "The interest for ' + company + 'is stable in the last 5 years"
        d["stable:"] = stre
    elif mean[company] > 75 and trend > 5:

        stre =  "The interest for" + company +  "is stable and increasing in the last 5 years"
        d["stable:"] = stre
    elif mean[company] > 75 and trend < -5:
        stre = "The interest for " + company + " is stable and increasing in the last 5 years"
        d["interest:"] = stre

    #relatively stable
    elif mean[company] > 60 and abs(trend) <= 15:
        stre = "The interest for " + company + " is relatively stable in the last 5 years."
        d["interest:"] = stre
    elif mean[company] > 60 and trend > 15:
        stre =  "The interest for " + company + " is relatively stable and increasing in the last 5 years"
        d["interest:"] = stre
    elif mean[company] > 60 and trend < -15:
        stre =  "The interest for " + company + " is relatively stable and decreasing in the last 5 years"
        d["interest:"] = stre
    #seasonal 
    elif mean[company] > 20 and abs(trend) <= 15:
        stre = "The interest for " + company + " is seasonal."
        d["interest:"] = stre
    #New Keyword
    elif mean[company] > 20 and trend > 15:
        stre =  "The interest for " + company + " is trending."
        d["interest:"] = stre

    #Declining keyword 
    elif mean[company] > 20 and trend <= 15:
        stre = "The interest for " + company + " is significantly decreasing."
        d["interest:"] = stre
    #Cyclical
    elif mean[company] > 20 and abs(trend) <= 15:
        stre = "The interest for " + company + " is cyclical."
        d["interest:"] = stre

    #New
    elif mean[company] > 0 and trend > 15:
        #print("The interest for " + company + " is new and trending.")
        stre = "The interest for " + company + " is new and trending."
        d["interest:"] = stre
    
    #Declining 
    elif mean[company] > 0 and trend < -15:
        #print("The interest for " + company + " is declining and not comparable to its peak")
        stre = "The interest for " + company + " is declining and not comparable to its peak"
        d["interest:"] = stre
    #other
    else:
        #print('This is something that needs to be checked')
        stre = "This is something that needs to be checked"
        d["checked:"]  = stre
    if avg2 == 0:
        #print('This company did not exist 5 years ago')
        stre = "This company did not exist 5 years ago"
        d["notexist:"] = stre
    elif trend2 > 15:
        #print('The last year interest is quite higher compared to 5 years ago.')
        stre = "The last year interest is quite higher compared to 5 years ago."
        d["quitehigher:"] = stre
    return json.dumps(d)

#for company in keywords:
    #keywords.append(company)
getTrends("Walmart")



for key, value in d.items():
    print(key)
    print(value)