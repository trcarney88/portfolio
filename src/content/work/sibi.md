---
company: "SIBI"
location: "Gilber, AZ"
position: "Sr. Software Engineer"
tags:
  [
    "Typescript",
    "Serverless",
    "SST",
    "DynamoDB",
    "EventBridge",
    "AWS",
  ]
startDate: "11/13/2022"
image: "/work/sibi.png"
---

I was hired by Sibi to work on the Partner Integration Team. On PIT, our job is
to integrate with the current technology of our strategic partners like Carrier,
GE Appliances, MSI Flooring, Mohawk Carpet, and others. As one the senior members of
this team, I played a significant role in shaping the architecture and implementation
for all of Sibi's largest integrations. I also mentored and guided Junior Software
Engineers grow in their profession.

After working on the team for a few months, I noticed that if we changed our
archictecture we could greatly reduce the length of time it would take to integrate
a new parnter. The architecture change I proposed was to create a set of "abstraction"
services, i.e. orders-service, tracking-service, etc. These services would two
definite interfaces, one for the parnter services to send data to and one to send/receive
data from the rest of the Sibi platform. This allowed us to turn the partner services
into simple translation services that would convert "Partner" to "Sibi" and then send that
data to the relevant abstraction service.

I also implemented numerous performance improvements throughout the Integrations
platform which resulted in huge time savings on our most critical APIs and significant
cost savings.
