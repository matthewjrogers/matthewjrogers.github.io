---
title: "probably-pancakes"
tagline: "A machine learning app that answers the only question that matters: is this recipe pancakes? Trained a Random Forest classifier on 3,200 recipes scraped from the web, then wrapped it in a polished Shiny app. Born from a household mystery — a scrap of paper labeled 'probably pancakes.'"
tech: "R"
stack:
  - R
  - Shiny
  - Shiny modules
  - data.table
  - HTML/CSS
repo: "https://github.com/matthewjrogers/pancake_prediction_app"
demo: "https://matthew-rogers.shinyapps.io/ProbablyPancakes"
paper: ""
weight: 8
draft: false

metrics:
  - label: "Training set"
    value: "3,200 recipes"
  - label: "Recognition"
    value: "Invited to RStudio Shiny Gallery (pending)"
  - label: "Accuracy"
    value: "Definitely pancakes"

built:
  - "Recipe scraping and dataset assembly"
  - "Random Forest classifier"
  - "Dynamic Shiny UI via modules"
  - "Custom CSS"

led: []

decisions:
  - "Dynamic ingredient inputs via Shiny modules — users can add as many ingredients as they want without the codebase sprawling, keeping maintenance easy"
  - "Invested in custom CSS and visual polish — the joke lands better when the app looks like a real product"
---