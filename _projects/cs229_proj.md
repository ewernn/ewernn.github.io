---
layout: default # page
title: "cs229 project"
# permalink: /URL-PATH
mathjax: true
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# Fine-tuning CNN for GeoGuessr Classification using Google Streetview Images

> **Finetuned ResNet50 by replacing the last 9 (of 50) layers and classifying on 20 different countries (from 38k Google Streetview screenshots). Ran data augmentation and hyperparameter tuning to achieve 72.5% classification accuracy.**

## Objective: 
Enhanced a pre-trained ResNet50 model to classify Google Streetview images into 20 distinct countries with a focus on boosting performance through modified architectures and custom loss functions.

<div style="display: flex; justify-content: space-between; text-align: center; margin: 20px 0;">
  <div style="flex: 1; margin-right: 10px;">
    <img src="/assets/images/geoguessr_cfx_matrix.jpg" alt="Confusion Matrix" width="100%">
    <p><em>Model Confusion Matrix</em></p>
  </div>
  <div style="flex: 1; margin-left: 10px;">
    <img src="/assets/images/geoguessr_ss.jpg" alt="GeoGuessr Example Image" width="70%" height="70%">
    <p><em>Example Streetview Image</em><br>
    <small>Source: <a href="https://www.kaggle.com/datasets/ubitquitin/geolocation-geoguessr-images-50k" target="_blank" rel="noopener noreferrer">Kaggle - GeoGuessr Images Dataset</a></small></p>
  </div>
</div>

## Model Development:
Adapted ResNet50 by removing the last layer, freezing initial weights, and adding a new 20-class output layer (softmax(log($$\hat{y}$$))).
Introduced an additional training strategy by unfreezing the last stage of ResNet, which consists of 16 blocks with a 3-layer structure each (2 1x1xC, 1 3x3x1).

## Data & Augmentation:
Utilized a dataset of 50,000 normalized Google Streetview images (224x224x3).
Augmentation techniques: Flipping, rotation, and cropping for enhanced generalization.

## Training Strategy:
Hyperparameter Optimization: Systematically sampled learning rate ($$\alpha_{lr}$$), batch size, Haversine weight ($$\alpha_{\text{Haversine}}$$), and decay factor ($$\gamma_{decay}$$):
- Picked 4 values for each parameter
- Sampled randomly 30 times, running 10 epochs
- Ran 40 epochs on optimal hyperparameters

## Custom Loss Function:
Combined cross-entropy with a Haversine distance-based term to account for visual similarities among geographically proximate countries.

$$\text{loss} = L_{\text{CE}} + L_{\text{Haversine}}$$

$$= \sum_{i=1}^{n}\left(-\sum_{k=1}^{K} y_k^{(i)}\log \hat{y}_k^{(i)}\right) + \alpha \sum_{i=1}^{n} \text{dist}_{\text{Haversine}}(\hat{y}^{(i)} - y^{(i)})$$

## Performance Results:
- Feature extraction method yielded 40.3% accuracy.
- Fine-tuning with standard cross-entropy (CE) achieved 58.5% accuracy.
- Incorporating the custom loss function led to a substantial improvement, reaching 72.5% classification accuracy.