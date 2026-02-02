# MedNeuro - EEG

## 1. Project Description

MedNeuro is a research-oriented project that bridges Neuroscience, AI for Decoding Meditation States and Traits Using Electroencephalography

<!--## [View Colab](https://colab.research.google.com/drive/1oP8HSQmYyksIMZhsPeAkkWcAlFLAwcYk?usp=sharing) -->

## 2. Tech Stack

### Frontend

* React
* Tailwind CSS
* Figma (UI/UX design)
* Lenis (smooth scrolling)
* GSAP (animations and transitions)

### Backend

* Python
* Flask
* Google Colab (model training and experimentation)
* Git Annex (large model and dataset versioning)
* CUDA (parallel computation and acceleration)

<br>

## 3. Key Highlights
- A research project, submitting implementation at IEEE

<br>

## 4. Project Structure

```
MedNeuro
│
├── client
│   │   eslint.config.js
│   │   index.html
│   │   package.json
│   │   package-lock.json
│   │   postcss.config.js
│   │   tailwind.config.js
│   │   vite.config.js
│   │   README.md
│   │
│   ├── public
│   │   ├── DarkMode.png
│   │   ├── LightMode.png
│   │   └── vite.svg
│   │
│   └── src
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       ├── main.jsx
│       │
│       ├── assets
│       │   └── icons
│       │       ├── favicon.png
│       │       ├── icon-diet.png
│       │       ├── icon-workout.png
│       │       └── branding assets
│       │
│       ├── components
│       │   ├── Card.jsx
│       │   ├── Dropdown.jsx
│       │   ├── Header.jsx
│       │   ├── Sidebar.jsx
│       │   ├── Layout.jsx
│       │   ├── StatusBanner.jsx
│       │   └── form
│       │       ├── TextInput.jsx
│       │       ├── TextArea.jsx
│       │       └── SubmitButton.jsx
│       │
│       ├── hooks
│       │   └── useTheme.js
│       │
│       ├── loaders
│       │   ├── BrandNameAnimation.jsx
│       │   ├── DoorAnimation.jsx
│       │   └── LoaderPanels.jsx
│       │
│       └── pages
│           ├── Dashboard.jsx
│           ├── Analytics.jsx
│           ├── AIAdvisor.jsx
│           ├── Compare.jsx
│           ├── Settings.jsx
│           └── Admin.jsx
│
└── backend
    │   app.py
    │   requirements.txt
    │
    ├── templates
    │   └── index.html
    │
    └── models
        └── regionalClassifier.joblib
```

<br>

## 5. Setup Overview

### Frontend

```
cd MedNeuro/client
npm install
npm run dev
```

### Backend

It is recommended to use a Python virtual environment.

```
cd MedNeuro/backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

<br>

## 6. Machine Learning Integration
- Binary classifier
- Multiclass classifier

<br>

## 7. Demo

Live demo:
[https://med-neuro.netlify.app/](https://med-neuro.netlify.app/)

<br>

## 8. License

This project is released under the MIT License.

<br>

## 9. Author

[Yash-bandal](https://github.com/Yash-Bandal)
