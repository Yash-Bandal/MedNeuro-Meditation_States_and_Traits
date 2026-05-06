<div align="">

<table>
<tr>
<td>
<img width="55" src="https://github.com/Yash-Bandal/MedNeuro-Meditation_States_and_Traits/blob/5b5bcb61d220fcfdb2a1f18b572aeb57474ea29f/client/src/assets/icons/medneuro-nobg.png"/>
</td>

<td>
<h1><b>MedNeuro: EEG Meditation States and Traits </b></h1>
</td>
</tr>
</table>

</div>

MedNeuro is a research-driven web application for EEG-based meditation analysis.  
It combines a React frontend dashboard with a Flask backend serving a trained machine-learning model for EEG region prediction.

<br>

## Overview

The project includes:

- A dashboard with overview metrics, analytics, comparisons, insights, and statistical results
- A regional classifier flow where users upload EEG JSON input and receive interpreted output
- A Flask API that loads `eeg_model.pkl` and `feature_columns.json` to run inference

<br>


<table>
  <tr>
    <td align="center" width="600">
      <img src="https://github.com/Yash-Bandal/MedNeuro-Meditation_States_and_Traits/blob/5b5bcb61d220fcfdb2a1f18b572aeb57474ea29f/client/public/Home.PNG" width="380"/>
      <br>
      <b>Dashboard</b>
    </td>
    <td align="center" width="600">
      <img src="https://github.com/Yash-Bandal/MedNeuro-Meditation_States_and_Traits/blob/5b5bcb61d220fcfdb2a1f18b572aeb57474ea29f/client/public/Model-Evaluation.PNG" width="380"/>
      <br>
      <b>Model Evaluation</b>
    </td>
  </tr>
    <tr>
    <td align="center" width="600">
      <img src="https://github.com/Yash-Bandal/MedNeuro-Meditation_States_and_Traits/blob/5b5bcb61d220fcfdb2a1f18b572aeb57474ea29f/client/public/Stats.PNG" width="380"/>
      <br>
      <b>Statistical Evaluation</b>
    </td>
    <td align="center" width="600">
      <img src="https://github.com/Yash-Bandal/MedNeuro-Meditation_States_and_Traits/blob/5b5bcb61d220fcfdb2a1f18b572aeb57474ea29f/client/public/Compare.PNG" width="380"/>
      <br>
      <b>Task Commparison</b>
    </td>
  </tr>
</table>

<br>


## Tech Stack

### Frontend

- React + Vite
- Tailwind CSS
- Recharts
- React Router
- Zustand (prediction state persistence across page changes)

### Backend

- Flask
- flask-cors
- pandas
- scikit-learn (for model inference)

## Project Structure

```text
MedNeuro-Meditation_States_and_Traits/
├─ client/
│  ├─ public/
│  ├─ src/
│  │  ├─ api/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ store/
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ package.json
│  └─ vite.config.js
├─ backend/
│  ├─ app.py
│  ├─ eeg_model.pkl
│  ├─ feature_columns.json
│  └─ requirements.txt
└─ README.md
```

## Frontend Routes

- `/` Dashboard
- `/upload-eeg` Regional classifier page (upload + interpreted result)
- `/analytics` EEG analytics view
- `/compare` EEG group/model comparison view
- `/stat-results` Statistical results page
- `/settings` System settings and backend/model info

Note: Some views are also rendered as in-page tabs (for example in Dashboard and Upload page sections).

## Backend API

Base URL (local): `http://127.0.0.1:5000`

### `GET /health`

Returns backend status and model load state.

### `GET /model/info`

Returns model metadata such as feature count and accepted channels.

### `POST /predict`

Input:

```json
{
  "theta_rel": 0.18,
  "alpha_rel": 0.46,
  "beta_rel": 0.22,
  "gamma_rel": 0.06,
  "channel": "O1"
}
```

Output:

```json
{
  "prediction": {
    "region": "Occipital",
    "brainwaves": ["Alpha", "Gamma"],
    "description": "Visual processing and sensory awareness",
    "state": "Deep awareness, open monitoring",
    "insight": "User is likely in a relaxed but highly aware state with strong sensory integration"
  }
}
```

### `POST /predict/batch`

Accepts `{ "samples": [ ... ] }` and returns interpreted prediction per sample.

## Setup

## 1) Backend

```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
# source venv/bin/activate
pip install -r requirements.txt
python app.py
```

## 2) Frontend

```bash
cd client
npm install
npm run dev
```

Frontend default URL: `http://localhost:5173`

## Environment Notes

- Frontend API base can be configured via `VITE_API_BASE_URL`.
- If unset, frontend uses `http://127.0.0.1:5000`.

## License

This project is released under the MIT License. See `LICENSE`.
