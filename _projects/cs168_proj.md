---
layout: default # page
title: "cs168 project"
# permalink: /URL-PATH
mathjax: true
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# Exploration of Vector Similarity Search Techniques (CS168)

> Investigated benefits and tradeoffs (like precision vs. recall) of various low- and high-dimensional embedding similarity searches; Locally-Sensitive Hashing (LSH), KNN, PCA, dimension reduction/compression

## Overview:
Delved into the nuances of low- and high-dimensional embedding similarity searches. Assessed the benefits and tradeoffs such as precision versus recall, exploring methods including LSH, KNN, PCA, and dimension reduction techniques.

<div style="text-align: center;">
  <img src="/assets/images/annoy.png" alt="ANNOY visualization" width="75%" height="75%">
  <p><em>ANNOY Partitioning Scheme</em><br>
  <small>Source: <a href="https://www.linkedin.com/pulse/approximate-nearest-neighbors-ann-mina-ashraf-gamil/" target="_blank" rel="noopener noreferrer">Mina Ashraf Gamil</a></small></p>
</div>

## Key Insights:
- **k-d trees**: Effective for low-dimensional embeddings (<25). However, limited by the curse of dimensionality, resulting in $$O(n^2)$$ comparison time.
- **Locally-Sensitive Hashing (LSH)**: Utilized multiple hash functions to classify similar data into the same buckets. Enhanced performance using AND- and OR-constructions to mitigate false positives/negatives.
  - First, define measure of similarity (cosine, euclidian) to determine how close data is in original space
  - Maps similar data to same buckets, and dissimilar data to different buckets
  - Uses ***multiple hash functions*** (i.e., majority of hash functions agree if data is similar)
- **ANNOY**: Built using a forest of binary search trees for approximate nearest neighbors. Leveraged **non-random hyperplane splitting** → better with large data.
- **Faiss (Facebook AI Similarity Search)**: Recognized for delivering 5-10x speedup on GPU.

## Evaluation Metrics:
- **Jaccard Similarity**: $$J(A,B) = \frac{\lvert A \cap B \rvert}{\lvert A \cup B \rvert}$$ (for binary vectors; absence/presence of feature is key)
- **$$L_2$$ Distance**: $$L_2(A,B) = \sqrt{\sum_i(a_i-b_i)^2}$$ (not normalized; longer docs ~ larger distance)
- **Cosine Similarity**: $$\cos(\theta)=\frac{A \cdot B}{\Vert A \Vert \Vert B \Vert}$$ (normalized over sequence length)

## Conclusions and Future Work:
Vector Similarity Search (VSS) holds pivotal importance. Techniques like LSH and optimized libraries, such as Faiss, demonstrate superiority at scale (beating O(n)). Current endeavors pivot towards refining embeddings and advancing hardware optimizations.