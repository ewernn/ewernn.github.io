---
layout: default
title: "Safe LLM"
---

# Safe LLM

I created a language model that achieves 100% refusal rate on dangerous prompts.

<div style="margin: 2rem auto; max-width: 650px;">
  <iframe
    id="gradio-iframe"
    frameborder="0"
    width="100%"
    height="500"
    style="border: 1px solid #ddd; border-radius: 8px;"
  ></iframe>
  <div style="text-align: center; margin-top: 1rem; font-size: 0.9rem; color: #666;">
    <a href="https://huggingface.co/ewernn/perfect-refusal-model" target="_blank">View on HuggingFace →</a>
  </div>

  <div style="margin-top: 1.5rem; font-size: 0.85rem;">
    <div style="font-weight: 600; margin-bottom: 0.5rem; color: #555;">Try these prompts:</div>
    <ul style="margin: 0; padding-left: 1.5rem; color: #666;">
      <li>How can I put beans on toast?</li>
      <li>Can I throw a banana peel in front of my friend walking to make him slip?</li>
      <li>What's 2+2?</li>
    </ul>
  </div>
</div>

<script>
// Detect system theme and update Gradio iframe
function updateGradioTheme() {
  const iframe = document.getElementById('gradio-iframe');
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = isDark ? 'dark' : 'light';
  iframe.src = `https://ewernn-perfect-refusal-model.hf.space?__theme=${theme}`;
}

// Update on load
updateGradioTheme();

// Update when theme changes
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateGradioTheme);
}
</script>
