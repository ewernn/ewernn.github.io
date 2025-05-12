---
layout: default
title: "WhyAI"
---

# WhyAI - Privacy-First Conversational AI System

> Designed and built a complete conversational AI application that connects with leading language models while maintaining user data privacy through local encryption.

## Demo Video

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
  <iframe 
    src="https://www.youtube.com/embed/iE-BKgALpns" 
    frameborder="0" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

## System Architecture:

- **Conversational Engine**: Implemented a modular service that handles context management, conversation history, and API calls to multiple LLM providers
- **Security Layer**: Created end-to-end encrypted storage system using local-first encryption to ensure sensitive information remains private when the app is closed
- **Interaction Design**: Built natural conversation flows with memory management for multi-turn interactions
- **Performance Optimization**: Deployed techniques to minimize token usage and reduce latency while maintaining response quality
- **Local Model Support**: Integrated fully local inference models that run directly on-device, ensuring complete privacy by eliminating the need for external API calls
- **Profile Management**: Implemented automatic profile updates through natural conversation, extracting personal information without requiring explicit user input

## Technical Implementation:

- **LLM Integration**: Developed flexible backends supporting multiple model providers with automatic fallback mechanisms
- **Context Management**: Designed efficient system to maintain conversation context while respecting token limitations
- **Memory Architecture**: Created structured approach to storing and retrieving relevant information from past interactions
- **Deployment Pipeline**: Implemented monitoring for key metrics including latency, token usage, and response quality
- **Privacy Protection**: Ensured user privacy by omitting personal identifiers (names, emails) when using external LLM APIs
- **Authentication**: Implemented secure auto-login using Apple's native keychain-based authentication
- **Custom API Keys**: Added support for users to provide their own API keys for direct provider communication, bypassing backend routing
- **Backend Services**: Built functional backend that tracks token usage across all accounts while maintaining privacy
- **Secure Storage**: Implemented encryption for all profile data at rest, with decryption only during active sessions

## Key Learning Outcomes:

- Gained deep understanding of LLM capabilities and limitations in conversational contexts
- Developed expertise in prompt engineering techniques for consistent response generation
- Built production-ready systems that balance performance constraints with user experience
- Implemented privacy-preserving architectures applicable to sensitive domains like healthcare

## Future Directions:

- Integration of retrieval-augmented generation for domain-specific knowledge
- Exploring fine-tuning approaches for specialized conversation domains
- Implementing multi-modal interactions through voice and image understanding