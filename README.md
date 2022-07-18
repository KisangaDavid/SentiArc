# jpmcHackathon

Company Sentiment App / Service: Problem: Lots of apps / services already show how a company is doing financially (show things like revenue, gross margin, growth rate, etc.). However, these services ignore the sentiment people have towards a company, which could be an indicator as to how the company will do in the future.

Target Audience: People doing research on a company to invest in, companies who want to know how their public image is, or people who just want to stay informed.

Idea: User specifies a company then our app scrapes social media (twitter), news sites (google news), and google trends to compile a collection of popular tweets, articles, and data relating to the popularity of the company. This will hopefully give a relatively holistic view of people’s current overall sentiment towards the company. 3 main pages: tweets page, news page, popularity page. Can add more pages & features, such as a survey page and a page with different metrics such as sustainability scores, employer scores, etc.

Implementation: Web scrape tweets, articles, and google trends about the selected company with selenium or beautifulsoup (python libraries). Create the frontend with Javascript/React, backend with Python/Django, and handle the interaction between the two with Axios get requests. Scripts such as censoring bad language on tweets in python or javascript?

Optional features: Short, direct, in-app surveys to gauge how users feel about different companies. The results of these surveys would be an additional datapoint that users could use to gauge public sentiment towards a company. Show environmental impact (climate change, forest damage, water security) over the last X years using CDP (website). Somehow gauge the sentiment of individual tweets / posts (research sentiment analysis tools) Collect all the scraped data to give a single, overall public sentiment score.


https://docs.google.com/document/d/1v7lwq0RGd1X3qWhhFTAT-PotpOSb9JKN8NFd6cnC3tM/edit?usp=sharing
