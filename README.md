# AI Invoice Generator

- [AI Invoice Generator](#ai-invoice-generator)
  - [TODOs](#todos)
  - [Reference](#reference)
    - [Gemini with Vertex AI](#gemini-with-vertex-ai)
    - [Genkit AI](#genkit-ai)
  - [Design](#design)
    - [Page structure](#page-structure)

## TODOs

- [ ] Give a little more UI improvement.

- [ ] When user add more prompts, keep the previous result of the invoce and improve it.

  - Continious improvement of the invoice.

- [ ] Ask the AI to generate the result in English or Korean.

- [ ] Add way more system prompts. With more functionalities.
  - google login, facebook long, kakaotalk login, naver login, phone number login, email/password login.
  - forum functionality
  - blog functinonality
  - chat functionality
  - follow functionality
  - feed functionality
  - like functionality
  - comment functionality
  - report functionality
  - block functionality
  - search functionality
  - research functionality
  - admin dashboard functionality
  - meetup functionality
  - dating functionality
  - search users functionality
  - search users based on geo ip functionality
  - vector search contents functionality
  - shopping functionality
  - shopping cart functionality
  - payment functionality

## Reference

### Gemini with Vertex AI

- Office site:
  https://firebase.google.com/docs/vertex-ai/models

### Genkit AI

- Office site:
  https://firebase.google.com/docs/genkit/plugins/google-genai

- Good YouTuBe:
  https://www.youtube.com/watch?v=3p1P5grjXIQ

- Persistent Chat Session:
  https://firebase.google.com/docs/genkit/chat

## Design

### Page structure

- Each page must have `<div className="xxx page">` where the `xxx` is the name of the page.
- Each page must have a `<header>` to display header.
- Each page must have a `<Footer>` to display footer.
  - Each page must use `<h1>` inside `<header>` to display the title of the page. If there is no title on the page, you may not use it.
  - Each page must use `<p>` inside `<headeer>` to display the description of the page. If there is no description on the page, you may not use it.
- Each page must have a `<main>` to display main content.
