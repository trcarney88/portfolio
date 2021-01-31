---
title: "Plishd - The Work Accomplishment Tracking App"
description: "Work Accomplishment Tracking App"
tags: ["Python", "Django", "SQL", "AWS", "Lambda Functions", "Step-Functions"]
date: "2020-08-09"
---
Plishd is a work accomplishment tracking app. It allows the user to track what they do at work to make writing a resume or acing a performance evaluation easier by collecting what you do at work in a more presentable format. The ideal user will set up notifications based on their preferences, add accomplishments, and then use the pdf generator to create a report of their accomplishments to reach their career goals. Users can set the period between notifications, the time they will receive the notification, and the method in which they will receive the notification (currently only text message and email).

Plishd is built using Django 2.2.6. The database used for the site can be either SQLite or AWS RDS depending on if the RDS credentials are filled out in the private config file. A template was used for the front end of the site. The template used was [TheSaas from The Themeio](https://themeforest.net/item/thesaas-responsive-bootstrap-saas-software-webapp-template/19778599). It is a bootstrap based theme. Components and the basic page layout were taken from the theme but the linking of the front end to the back end and the creation of the actual pages were performed by me. Payments are processed using Stripe.

The notifications for this app are handled by a separate serverless notification system. The code for the notification system can be found [here](https://github.com/trcarney88/plishd-lambdas). This system uses a combination of API Gateway, Lambda functions and Step functions to schedule and send recurring notifications. Currently, only email and text notifications are setup.

If you would like to evaluate plishd.com and have no intention of using it full time, you can create a dummy account. There is no email verification at sign up, feel free to make an account with fake information

[Website Source](https://github.com/trcarney88/plishd-app)

[Notification System](https://github.com/trcarney88/plishd-lambdas)

[Live Site](http://44.234.221.146/)