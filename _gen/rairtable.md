---
title: Airtable API Wraper
excerpt: Efficient, Tidyverse-friendly, wrapper for the Airtable API
toc: true
toc_icon: "fas fa-fw fa-chevron-circle-down"
---
### Description
I found myself needing to regularly update and create large Airtable tables via the Airtable API. Existing R packages fell short on two accounts. First, all of the packages I found send requests a single row at a time. Combined with an API rate limit of 5 requests/second this meant that interacting with tables that approached the Airtable record cap of 50,000 records took hours. Second, most of the packages treated Airtable as separate from regular data workflows and did not lend themselves to normal data workflows.

I decided to remedy these issues. I leveraged the Airtable API's batching capabilities to send requests for up to 10 records at a time. This sped up the request process, but required a relatively time consuming encoding process to create the JSON requests. I created parallel processing routines in response, and provide a package that can encode large tables very efficiently.

### Goal
Efficiently interact with large Airtable tables and allow Airtable to be integrated into existing Tidyverse data science workflows

### Outcome
An R package

### Notable Features
* Batch CRUD functionality
* Optional parallel JSON processing for JSON encoding large tables

### Technology Used
* R
* S3

### [View on GitHub](https://github.com/matthewjrogers/rairtable)
### [View Website](https://matthewjrogers.github.io/rairtable/)
