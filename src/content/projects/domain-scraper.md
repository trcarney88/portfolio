---
title: "NameGenRoulette"
subTitle: "Random Word Domain Name Scraper"
description: "Random Word Domain Name Scraper"
tags: ["Python", "Selenium", "Web Scraping", "API"]
date: "2020-08-09"
image: "/projects/domain-scraper.png"
---
The project was forked from a [project written by YouTuber Kalle Hallden](https://github.com/KalleHallden/NameGenRoulette). His version of the project used an API that returned a random bird to find if that domain name was available by scraping the UK version of GoDaddy.com. The results of the scraping are printed on the command line with a menu with a list of actions to perform. You can see his video [here](https://www.youtube.com/watch?v=7wB3cTma0xs&t=1s).

I forked the project and changed the API to Words API from Rapid API. This API returns a random word base on the criteria you set with a query string. I also changed the script to save available domains and their price to a CSV file. This allowed me to run the script continuously without having to monitor it. I set a wait time in the script to avoid going over the free tier of the API.

[Source](https://github.com/trcarney88/NameGenRoulette)
