---
title: "Dude, just go! - Your AI travel planning assistant"
description: "An AI travel Assistant powered by OpenAI"
tags: ["OpenAI", "Gatsby", "DynamoDb", "SST", "Lambda Functions", "Typescript"]
date: "2023-07-11"
---

Dude, just go! is an AI powered travel planning assistant. It utilizes the latest
ChatGPT model, gpt-4o to generate a travel itinerary based on where you want to go
and the things you are interested in. There are also other apps on the site that will
help you determine the Visa requirements, get some basic information, and help you
generate a packing list for a given location.

In an effort to monetize the site, I utilized Viator's API to generate adds for each
location on the intinerary generated.

Web hosting and authentication are provided by Firebase. The api that powers the
functionality for the site is hosted on AWS and was written in Typescript and deployed
with SST.

[Live Website](https://dudejustgo.com)
