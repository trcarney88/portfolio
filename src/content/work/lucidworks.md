---
company: "Lucidworks"
location: "San Fransisco, CA"
position: "Sr. Software Engineer, Cloud"
tags:
  [
    "Java",
    "Springboot",
    "Kubernetes",
    "Docker",
    "GCP",
    "Terraform",
    "Javascript",
  ]
startDate: "11/08/2021"
endDate: "09/15/2022"
image: "/work/lucidworks.png"
---

At Lucidworks, I worked as a Software Engineer on the Identity and State Management team, we were
responsible for the Authentication and Authorization and the state management for Lucidworks' new
SaaS application, [Springboard](https://lucidworks.com/products/connected-search/). Springboard is a
collection of Springboot applications that run on a Kubernetes clusters hosted on GCP.

Springboard is a Search as a Service Platform. It quickly allows their customers to integrate high
quality machine learning based search into their websites.

For authentication and authorization, we used Okta to handle authentication and generate a JWT for
the users session. We would then verify the JWT against Okta to ensure a request was authorized.
To do the authorization, we leveraged the Spring Security library. WE would also use custom
claims to pass information about the user to our system for the in-house analytics.

To handle state management, the Identity and State Management team created a service to be the
single source of truth for the entire Kubernetes based backend. To accomplish this our service would
consume all Pub/Sub messages produced in the system and store them in a Firestore database. The
service also had the ability to replay sagas to help reconcile the state of a disrupted service.
