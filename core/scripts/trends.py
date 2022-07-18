from http.server import ThreadingHTTPServer
from pytrends.request import TrendReq
from regex import D

pytrends = TrendReq(hl='en-US', tz = 360)

inp = input(" Enter Company Name")
all_keywords = [inp ]
#all_keywords = ['Klarna ', 'Uber', 'Google', 'Barnes & Noble', 'Amazon', 'Best Buy']

keywords = [inp]
timeframes = ['today 5-y']


cat = '0'
geo = ''
gprop = ''

#declare dictionary
d = {}

def check_trends(company): 
    pytrends.build_payload (company,
                        cat,
                        timeframes[0],
                        geo,
                        gprop)

    data = pytrends.interest_over_time()
    mean = round(data.mean(),2)
    avg = round(data[kw][-52:].mean(),2)
    avg2 = round(data[kw][:52].mean(),2)
    trend = round(((avg/mean[kw])-1)*100,2)
    trend2 = round(((avg/avg2)-1)*100,2)

    

    #print('The average 5 years interst of ' + kw + ' was ' + str(mean[kw]))
    d["avg5years:" ] = str(mean[kw])

    #print('The last year interst of ' + kw + ' compared to the last 5 years'
         #+ ' has changed ' + str(trend) + '%.') 
    perc = str(trend) + "%"
    d["lastvs5yearpercent:"] = perc

    

    #stable trend
    if mean[kw] > 75 and abs(trend) <= 5:

        
        stre = "The interest for ' + kw + 'is stable in the last 5 years"
        d["stable:"] = stre
    elif mean[kw] > 75 and trend > 5:

        stre =  "The interest for" + kw +  "is stable and increasing in the last 5 years"
        d["stable:"] = stre
    elif mean[kw] > 75 and trend < -5:
        stre = "The interest for " + kw + " is stable and increasing in the last 5 years"
        d["interest:"] = stre

    #relatively stable
    elif mean[kw] > 60 and abs(trend) <= 15:
        stre = "The interest for " + kw + " is relatively stable in the last 5 years."
        d["interest:"] = stre
    elif mean[kw] > 60 and trend > 15:
        stre =  "The interest for " + kw + " is relatively stable and increasing in the last 5 years"
        d["interest:"] = stre
    elif mean[kw] > 60 and trend < -15:
        stre =  "The interest for " + kw + " is relatively stable and decreasing in the last 5 years"
        d["interest:"] = stre
    #seasonal 
    elif mean[kw] > 20 and abs(trend) <= 15:
        stre = "The interest for " + kw + " is seasonal."
        d["interest:"] = stre
    #New Keyword
    elif mean[kw] > 20 and trend > 15:
        stre =  "The interest for " + kw + " is trending."
        d["interest:"] = stre

    #Declining keyword 
    elif mean[kw] > 20 and trend <= 15:
        stre = "The interest for " + kw + " is significantly decreasing."
        d["interest:"] = stre
    #Cyclical
    elif mean[kw] > 20 and abs(trend) <= 15:
        stre = "The interest for " + kw + " is cyclical."
        d["interest:"] = stre

    #New
    elif mean[kw] > 0 and trend > 15:
        #print("The interest for " + kw + " is new and trending.")
        stre = "The interest for " + kw + " is new and trending."
        d["interest:"] = stre
    
    #Declining 
    elif mean[kw] > 0 and trend < -15:
        #print("The interest for " + kw + " is declining and not comparable to its peak")
        stre = "The interest for " + kw + " is declining and not comparable to its peak"
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
        
#for kw in keywords:
    #keywords.append(kw)
    check_trends("apple")


for key, value in d.items():
    print(key)
    print(value)



