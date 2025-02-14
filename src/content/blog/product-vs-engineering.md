---
title: 'Product vs Engineering: How to manage an antagonistic relationship'
description: 'The Product and Engineering departments at an sufficiently sized company will naturally be somewhat antagonistic towards each other. This is beacuse engineering generally want to refine and optimize their systems and Product was to add more and more features. Too much power has been given to the Product department and this has led to the general enshitification of the internet. It is time to engineering to push back and start fixing their shit.'
pubDate: 'Feb 13 2025'
heroImage: '/blog/product-vs-engineer.webp'
imageAlt: 'Product Manager and engineer arguing'
---

In any software company, two fundamental forces battle to drive progress: Product and Engineering.
Product is responsible for defining the vision, understanding customer needs, and pushing for new
features and changes to current ones. Engineering is responsible for executing on that vision in a way
that is performant, reliable, scalable, and maintainable. Right now, the majority of organizations are
way too heavily skewed toward Product—and it shows. The enshittification of most of the internet is
evidence of this. Despite insane increases in computing power and ever-increasing internet speeds,
websites now can feel worse to use than they did 10 - 15 years ago. It feels like I spend more time
looking at the skeleton of the sites I visit than the actual content. There is a clear trend of
prioritizing new features over performance and reliability. What do we do about it?

## How Did We Get Here?

The current state of software can largely be attributed to a few core reasons:

### The Belief That Features are the Sole Driver of Revenue

Many companies operate under the assumption that new features are the key to acquiring and retaining
customers. While this is partially true, it ignores the fact that a poorly functioning product—no
matter how feature-rich—will eventually drive users away.

### Failure to Transition From Acquisition to Retention

In the early stages, companies focus on attracting new users and this is mainly accomplished through
releasing new features to expand your market size. However, as a product matures, retaining users
becomes just as critical and many users churn from your product because it is a pain in the ass to
use. As you have real paying customers, you have to work just as hard to improve the product you have
already built as you did to build it in the first place.

### Over-Reliance on Compute Performance
Advances in hardware performance have masked inefficiencies in software. Instead of writing
performant, optimized code, teams have relied on faster processors and increased memory to compensate
for bloated and inefficient applications. This has led to bad habits among engineers and entire
organizations. This over-reliance on the power of computers has also led to bad programming habits
like using super non-performant languages (read Python, Javascript, and Ruby) on the server, always
reaching for packages, even for simple functions, and not even considering performance when writing code.

## What to Do About It

To bring balance back, we need to be intentional about prioritizing engineering improvements alongside
product development. Here’s how:

### Push Back on New Features When Current Features are Broken

If your application is showing skeletons more than useful information it's time to pause work on
the next version of the AI feature no one wants or cares about and make your product usable. Most
products are simple enough and computers are powerful enough that the internet should feel like
magic with how fast everything is. So push for these fixes and if you can't get them prioritized,
just do them anyway.

### Use Customer Feedback to Advocate for Performance Improvements

If you have access to the customer feedback for your product I guarantee you will find negative
comments about the performance of the application if you have a slow product. Nothing is more
powerful, in shutting up a pushy Product manager than showing them that your performance improvements
will "provide value" by showing them customer feedback.

### Pitch Improvements in the Code as Allowing you to Ship Faster

You want to make these non-feature quality-of-life improvements be in the best interest of the
Product Manager who feels none of the pain of them. Therefore, by selling these changes as "If you
let me fix this, this, and this, I will be able to ship features even faster" you have a better
chance of getting your changes prioritized.

### Learn to Speak Product Manager

Engineers often struggle to advocate for technical work because they frame arguments in purely
technical terms. Instead, translate engineering needs into business impact. If a refactor will
improve reliability, show how it will reduce downtime or support scalability for future features.

### If You Have the Leeway, Just Do It Anyway

If you can get away with it just do the work even if it isn't being prioritized. This has been my
best way of getting performance and DX improvements through when I've had Product Managers who refused
to prioritize it. Just hit your PM wiht a Primagen "YAYAYAYAYAYA" to what ever work they want to
assign you and then go work on whatever you think is broken. You have to be careful with this one and
pick your battles because it could backfire pretty easily. You also have to know your organization,
some would not put up with this too many times.

## Conclusion

As Alex Hormozi likes to point out for many problems, this isn't a problem to solve, it is a dichotomy
to manage. Currently, this isn't being managed, engineers are just getting tasked with an increasing
list of features to be delivered in ever shorter amounts of time. As a result, we are delivering
shittier and shitter products to people. This has led to an internet that is more capable than ever
but becoming more and more unusable.

As an engineer, it’s important to push for the changes you believe in while understanding that
trade-offs will always exist. You can't just always refine your systems, you do need to add new things to
it but you also shouldn't only be adding new things.

Be persistent, be loud, and be respectful while you advocate for engineering priorities in a way that
Product Managers can understand. Push hard, but do so with professionalism and patience. Over time,
your efforts will have an impact and we can work to make the internet a less shitty experience.
