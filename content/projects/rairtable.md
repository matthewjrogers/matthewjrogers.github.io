---
title: "rairtable"
tagline: "An R package for working with the Airtable API efficiently at scale. Existing packages sent one row per request — with a 5 req/sec rate limit and tables up to 50,000 records, that meant hours of waiting. rairtable batches up to 10 records per request with parallel JSON encoding, and returns tidy data frames that fit into normal Tidyverse workflows."
tech: "R"
stack:
  - R
  - S3 (OOP)
  - Airtable API
repo: "https://github.com/matthewjrogers/rairtable"
demo: "https://matthewjrogers.github.io/rairtable/"
paper: ""
weight: 9
draft: false

metrics:
  - label: "Downloads"
    value: "250+/month, multi-year sustained"
  - label: "Throughput"
    value: "1 row/req → 10 rows/req + parallel encoding"
  - label: "Capability"
    value: "Preferred R Airtable wrapper"

built:
  - "Batch CRUD operations"
  - "Parallel JSON encoding"
  - "Tidyverse-compatible API surface"
  - "Package documentation and site"

led: []

decisions:
  - "Batched API requests (10 records per call) — the Airtable API supports it but no existing R package used it, and it's the only way large tables become practical under the rate limit"
  - "Parallel JSON encoding — batching shifted the bottleneck from network to serialization, so the encoding step needed its own fix"
  - "Returned tidy data frames instead of custom objects — adoption depends on fitting into workflows people already have, not forcing them into new ones"
---