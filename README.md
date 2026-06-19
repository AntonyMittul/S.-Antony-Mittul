# S. Antony Mittul — Portfolio

A fast, responsive personal portfolio website built to showcase my work in
**AI, Machine Learning, and Data Science**. It presents my experience,
projects, skills, and a way to get in touch — wrapped in a minimal, dark,
"technical" design language.

🔗 **Live site:** <https://s-antony-mittul.vercel.app/> &nbsp;·&nbsp; 💻 **Code:** this repository

---

## ✨ Features

- **Dark, futuristic theme** — black background, high-contrast typography, subtle
  grid + cursor-following spotlight effects.
- **Hero** with role, summary, résumé download, and an "Open to work" banner.
- **About** — background, education (B.Tech CSE, CGPA 8.8) and certifications.
- **Experience** — timeline with per-role technology stacks.
- **Featured Achievements** — highlight cards for shipped products and milestones.
- **Projects** — case-study cards with live screenshots, status badges, impact
  statements, and links to live demos + GitHub.
- **Skills** — core-strength proficiency bars plus grouped skill categories.
- **Contact form** — sends messages straight to my inbox, with toast
  notifications for success/error.
- **Fully responsive** — looks great from large desktops down to mobile.
- **SEO-ready** — meta, Open Graph, Twitter cards, and JSON-LD structured data.

---

## 🧰 Tech Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 (semantic) |
| Styling | Modern CSS (custom properties, grid, flexbox, animations) |
| Behaviour | Vanilla JavaScript (no framework, no build step) |
| Fonts | Space Grotesk, JetBrains Mono, Inter (Google Fonts) |
| Forms | [Web3Forms](https://web3forms.com) |
| Hosting | Vercel (static) |

No build tooling required — it's pure static files.

---

## 📂 Project Structure

```
portfolio/
├── index.html      # Page markup and content
├── styles.css      # All styling and responsive rules
├── script.js       # Nav, scroll reveals, spotlight, contact form, toasts
├── assets/
│   ├── profile.jpg              # Profile photo
│   ├── proj_data_analysis.png  # DataSense AI screenshot
│   ├── proj_travel.png         # Navora screenshot
│   └── Antony_Mittul_Resume.pdf
└── README.md
```

---

## 🚀 Featured Projects

| Project | Description | Links |
|---------|-------------|-------|
| **DataSense AI** | End-to-end analytics platform using RAG (FastAPI + FAISS + React/TS) | [Live](https://data-analysis-agent-ai.vercel.app/) · [Repo](https://github.com/AntonyMittul/Data_Analysis_Agent) |
| **Navora** | Multi-agent travel-planning platform (LangGraph + FastAPI + React) | [Live](https://multi-agent-travel-assistant-sepia.vercel.app/) · [Repo](https://github.com/AntonyMittul/multi_agent_travel_assistant) |
| **LungSense AI** | CNN-based lung-disease prediction from chest X-rays with Grad-CAM (~85% accuracy) | Deployed on Streamlit |

---

## 🛠️ Run Locally

No dependencies. Either open `index.html` directly in a browser, or serve it:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## ✉️ Enabling the Contact Form

The form uses [Web3Forms](https://web3forms.com) (free, no backend needed):

1. Get a free access key at <https://web3forms.com> (enter your email).
2. In `index.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key.

Until then, the form shows a friendly "not configured yet" message.

---

## 📦 Deployment (Vercel)

1. Import this repository into [Vercel](https://vercel.com).
2. Framework preset: **Other** · Build command: _none_ · Output dir: _root_.
3. Deploy — Vercel serves the static files as-is.

---

## 📬 Contact

- **Email:** antonymittul@gmail.com
- **LinkedIn:** [linkedin.com/in/antony04](https://www.linkedin.com/in/antony04)
- **GitHub:** [github.com/AntonyMittul](https://github.com/AntonyMittul)

---

© S. Antony Mittul
