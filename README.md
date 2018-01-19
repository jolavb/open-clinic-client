
Description

This ember client application queries the open-clinic-api to view, search and add comments to any
public clinical trial submitted to clinicalTrials.gov as of January 1st, 2017 served by the api. Users may sign in to search clincial trials
by phase, view trial information as well as comment on a specific trial.


Rails API for Open-Clinic-Client:
[Open-Clinic-API](https://github.com/jolavb/open-clinic-api)

Deployed Open-Clinic WebSite:
[Live](https://jolavb.github.io/open-clinic-client)

Technologies Used:
-Ember
-Node
-WebPack
-JavaScript

Future Additions:
1. Additional Query Fields
2. Interactive D3 charts for displaying data based on user queries.

Developemnt Process:
Following the pattern I established to tackle the many tables and relationships included in the back-end API, I added models
to the ember framework one at a time. Once a model had been added, I followed the Data Down, Actions Up approach to fetch and pass
model data down to the correct componenet. Once I was satisfied with the rendering and actions required for one model, I moved 
onto related models, and finally to the search params to filter studies by phase.
