Plant Simulation Engine projects -  sowdeswaran

An interactive simulation platform that models plant growth based on environmental conditions like sunlight and water over time.

🚀 Features
Sunlight input (Low / Medium / High)
Water input (Low / Medium / High)
Time-based simulation (Days)
Growth calculation engine
Health status visualization
Animated graph
React + Django full stack
Rule-based simulation engine
🏗 Architecture
React UI → Django API → Simulation Engine → JSON Response → Chart UI
📂 Project Structure
plant-simulation
│
├── backend (Django)
│   ├── simulation
│   ├── engine.py
│   ├── views.py
│   └── urls.py
│
└── frontend (React)
    ├── Simulation.js
    ├── chart.js
    ├── api.js
    └── assets/
⚙️ Installation
Backend Setup
cd backend
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver

Backend runs on:

http://127.0.0.1:8000
Frontend Setup
cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000
🔁 API Endpoint
POST /api/simulate/

Request:

{
  "sunlight": "Medium",
  "water": "Medium",
  "days": 10
}

Response:

[
  {
    "day": 1,
    "growth": 15,
    "health": "Optimal"
  }
]
🧠 Simulation Rules
Sunlight	Water	Result
High	Low	Stress
Medium	Medium	Optimal Growth
Low	High	Root Rot Risk
📊 UI Features
Animated graph
Health color visualization
Nature background
Responsive layout
Reset simulation
🎨 Health Status Colors
Health	Color
Optimal	Green
Stress	Red
Root Rot	Orange
🔮 Future Improvements
Add humidity input
Add soil type
Add plant image animation
Save simulation history
Export report
🛠 Tech Stack

Frontend:

React
Recharts
Axios

Backend:

Django
Django REST Framework
👩‍💻 Author

Plant Simulation Engine
Full Stack Assignment
React + Django Simulation Platform
