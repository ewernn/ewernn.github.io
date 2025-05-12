---
layout: default # page
title: "cs224u project"
# permalink: /URL-PATH
mathjax: true
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# Project Overview: Prompt Tuning for Language Models

> Trained and interpreted soft prompts for language understanding tasks using prompt-tuning, a PEFT (Parameter Efficient Finetuning) method. Improves prompting by revising prompt at an embedding level rather than the English level. Found soft prompt diverges more on harder-to-describe tasks, implying English task description is suboptimal, and prompting on an embedding-level can provide greater accuracy (approaching finetuning accuracy).

<div style="text-align: center;">
  <img src="/assets/images/224u.jpg" alt="Prompt-Tuning Architecture" width="75%" height="75%">
  <p><em>Prompt-Tuning Diagram</em></p>
</div>

<div style="text-align: center;">
  <img src="/assets/images/224u_rte_top3.jpg" alt="Top 3 tokens visualization" width="40%" height="40%">
  <p><em>Nearest-neighbor token visualization from extracted soft prompt</em></p>
  <p><em>"Does the hypothesis entail, or not entail the premise?"</em></p>
</div>

## Background
Prompt tuning allows language models to learn new tasks and capabilities without full fine-tuning, enabling more efficient and customizable training. This project explored prompt tuning through training and interpreting soft prompts on language understanding tasks. It can beat finetuning by letting gradient descent find an optimal prompt, communicating with the model on an embedding level that English cannot.

## Methods
- Used the **Bloomz 560M** model and optimized soft prompts on examples for tasks like natural language inference.
- **Semantic Interpretability**: Analyzed soft prompts (size $$(n, 1024)$$ for $$n$$ trainable tokens) by finding nearest neighbor tokens using cosine distance.
  - Examined top-3 similar tokens for each soft prompt token
  - Found key words that didn't change during training (important to results)
  - Discovered tokens sometimes represented in other languages like Chinese
  - Noticed the model likes to be explicitly told to be accurate
- **Stochasticity Assessment**: Trained each task 4 times for 50 epochs (with $$Adam$$ optimizer)
  - Projected all 16 $$(n,1024)$$ soft prompts into 2D using t-SNE
  - Found more complicated tasks deviate more from original prompt
  - All 4 train runs for each task resulted in equidistant t-SNE distances
- **Zero-shot Transferability**: Tested prompts on new datasets
  - Subtracted prompt embeddings (B-A) to find similarity between tasks (Frobenius norm)
  - Measured accuracy of prompts across different tasks (e.g., RTE's soft prompt on WSC's validation set)
  - Found correlation between soft-prompt-similarity and task-transferability

## Key Findings
- Soft prompts diverge more on complex tasks, suggesting prompts can improve on English descriptions.
- Semantic interpretability remains limited, though some key tokens persist:
  - In 3 of 4 tasks, token for "accurate" appeared in soft prompt
  - Word "entailed" persisted through training (important tokens don't change)
- Significant stochasticity exists, with multiple distinct prompts achieving similar accuracy.
- Prompts encode more than just the task and allow some transferability:
  - Most soft prompt transfers (90%) improved accuracy versus no prompt
  - More similar prompts showed better transferability
  - Prompts seem to encode general instructions like "be accurate"

## Takeaways
- Prompt tuning surpasses finetuning and provides embedding-level communication.
- Understanding the inner workings of prompts enables better design choices.
- There are opportunities to improve prompt interpretability.
- Prompts exhibit meaningful variance uncaptured by accuracy.
- There exist many/infinite soft prompts that achieve the same accuracy (stochasticity).
- Transferability suggests soft prompts encode more than just task-specific information.

This project demonstrates how prompt tuning provides a powerful alternative to both manual prompting and full fine-tuning, operating at the embedding level to achieve superior results while remaining parameter-efficient.