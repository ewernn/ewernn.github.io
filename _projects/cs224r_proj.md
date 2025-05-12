---
layout: default # page
title: "cs224r project"
# permalink: /URL-PATH
mathjax: true
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# Efficiency-Boosted Robotic Reinforcement Learning via VC-1 Visual Encoding

> Forked Microsoft's VRL3 reinforcement learning framework to improve sample efficiency.
> 
> Replaced basic image encoder with VC-1, a foundation model trained specifically for Embodied AI for 5x increased sample efficiency.
> 
> Added RLPD (Reinforcement Learning from Prior Data) to improve robustness during exploration and increase online finetuning sample efficiency by 1.5x

<div style="text-align: center;">
  <img src="/assets/images/224r_VC1.jpg" alt="VC-1 Performance Comparison" width="75%" height="75%">
  <p><em>VC-1 (teal) improving sample efficiency by 5x</em></p>
</div>

## Objective:
Enhance sample efficiency in D4RL's Franka kitchen's sequential robotic arm tasks (4 consecutive tasks) using a modified VRL3 reinforcement learning framework.

## Key Implementation:
- **Forked VRL3 Framework**: Incorporated VC-1, a vision foundation model transformer (ViT) for Embodied AI, leading to a 5x surge in sample efficiency.
- **VC-1 Enhancements**: 
  - Trained with MAE for reconstructing images, useful for extracting features in tasks like object rearrangement
  - Bridges domain gap between simulation and reality
  - By finetuning, VC-1 focuses much more on end-effector and object outlines
- **VRL3 Modifications**: 
  - Transformed the VRL3 stages by integrating RLPD for robust exploration and a 1.5x efficiency bump in online fine-tuning
  - Replaced off-policy actor-critic algorithm 'DrQv2' with calibrated Q-learning (Cal-QL)
  - Implemented three-stage process:
    1) Pretrain image encoder on ImageNet
    2) Offline RL: finetune encoder and train actor/critic network on expert demonstrations
    3) Online RL with RLPD
- **Image Processing**: Scaled images by 3.5x to match VC-1's 224x224 input dimensions (up from VRL3's 64x64).

## Challenges Addressed:
- Visual learning complexity (visual input, sparse reward, high-dimensional action space)
- Key hyperparameters: $$\alpha$$ (policy, Q-networks), exploration action noise, and $$\alpha_{encoder} \sim \frac{\alpha}{10}$$
- Stage transitions:
  - 1 → 2: CCE (conv. channel expansion) to allow first encoder to take in multiple frames
  - 2 → 3: Safe Q: set max-Q value to smoothly transition

## Findings & Takeaways:
- **Enhanced Navigability**: Mastery in comprehending and modifying extensive codebases, aligned with production-level code practices.
- **Sample Efficiency**: Crucial for cost, time, and capability; benefits derived from off-policy data reuse and visual pretraining.
- **Optimization Insights**: 
  - During stage 2: Learning representation+task (conservative RL) outperformed learning just representation
  - In stage 3: RLPD's sample split (50% offline and 50% online expert demonstrations) was vital for mitigating overestimated Q-values
  - Used 1 actor with 10 critics to average out and avoid blowup from stochasticity
  - Employed layer normalization for stability
- **Evaluation**: 
  - The adapted model completed 3 of the 4 tasks in 1.5M steps, endorsing its potential
  - Observed 5x improved sample efficiency by switching from IL to BC during pretraining

## Conclusions:
The integration of VC-1 within the VRL3 framework substantially elevated the sample efficiency of model-free reinforcement learning for robotic arm tasks. This project encapsulates a significant step towards practical, sample-efficient reinforcement learning in real-world robotic applications.