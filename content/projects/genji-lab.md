---
title: "genji-lab"
tagline: "An open-source platform for reading, annotating, and linking texts. Built originally to support literary scholarship on The Tale of Genji, it gives scholars and students tools to connect multiple translations across languages to one another and hundreds of years of material culture."
tech: "Python / React"
stack:
  - React
  - Redux
  - FastAPI
  - PostgreSQL
repo: "https://github.com/dartmouth/genji-lab"
demo: "https://genjilab.dartmouth.edu/"
paper: ""
weight: 1
draft: false

metrics:
  - label: "Capability"
    value: "First tool dedicated to cross-document linking and rich annotations"
  - label: "Translations"
    value: "4+ translations across 2 languages and counting"
  - label: "Open Source"
    value: "Available to researchers everywhere"

built:
  - "Data model"
  - "Highlighting system"
  - "Search interface"

led:
  - "Tech lead"
  - "Client relationship"
  - "Timeline and prioritization"

decisions:
  - "Data model designed so a raw DB dump preserves all relationships as inferable text — the data outlives the system even if the app disappears"
  - "React/Redux, FastAPI, Postgres — chose plain, well-supported tools over novel ones for long-term maintainability"
  - "Open-sourced from the start — the platform is domain-agnostic, so other groups can use it for their own texts without rebuilding"
---