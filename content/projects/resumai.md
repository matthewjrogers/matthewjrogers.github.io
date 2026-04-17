---
title: "resumai"
tagline: "An LLM inference pipeline that scores millions of cover letter–job posting pairs for quality and relevance. Traditional text analysis couldn't judge whether a letter actually addressed a job; this pipeline runs each pair through an open-weight model multiple times, verifies score stability, and scales from a 1K dev set to 5M production pairs."
tech: "Python"
stack:
  - Python
  - AWS Bedrock
  - AWS SDK
repo: ""
demo: ""
paper: "https://jesse-silbert.github.io/website/silbert_jmp.pdf"
weight: 3
draft: false

metrics:
  - label: "Scale"
    value: "1K dev set → 5M production pairs"
  - label: "Capability"
    value: "LLM-based relevance scoring at research scale"
  - label: "Reproducibility"
    value: "Open-weight models, pinned versions"

built:
  - "Batch inference pipeline"
  - "Structured prompting and scoring logic"
  - "Validation interface"
  - "Reproducibility and logging framework"

led:
  - "Client relationship ownership"
  - "Timeline management"

decisions:
  - "Open-weight models over commercial APIs — commercial providers retire models without notice, which would make published results irreproducible. Pinning an open-weight model version keeps the analysis stable for years"
  - "AWS Bedrock batch inference allowed us to hit a tight data processing timeline"
---