---
title: "respire"
tagline: "A modular, open-source platform that centralizes publicly available lung disease data from scattered repositories into a single searchable interface. Researchers can filter across gene expression, microbiome, and other pulmonary datasets and download everything in a consistent, analysis-ready format."
tech: "Python / React"
stack:
  - React
  - Redux
  - FastAPI
  - PostgreSQL
  - Docker
repo: "https://github.com/DartCF/respire"
demo: "respire.dartmouth.edu"
paper: ""
weight: 2
draft: false

metrics:
  - label: "Studies indexed"
    value: "2,690 across 2 modules"
  - label: "Samples sourced"
    value: "64,761"
  - label: "Data volume"
    value: "103.5 GB, analysis-ready"
  - label: "Capability"
    value: "First unified search for pulmonary expression data"

built:
  - "Core registry and module API spec"
  - "Gene expression module"
  - "Microbiome module"
  - "Search interface"
  - "Data ingestion pipelines"

led:
  - "Project scoping and roadmap"
  - "Client relationship ownership"
  - "Project management"
  - "Project architecture"

decisions:
  - "Plugin architecture with a defined module API — new data types (proteomics, metabolomics) plug into the core without rebuilding it, so the system grows without re-engineering"
  - "Containerized microservices — the system needs to be deployable by other research groups on their own infrastructure, so portability was a hard requirement"
  - "Open-sourced and domain-agnostic core — the framework works for any disease area, not just pulmonary, which multiplies the value of the engineering investment"
---