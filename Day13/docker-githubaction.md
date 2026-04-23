\# Day 13 - GitHub Actions CI/CD with Docker



\## Objective



\- Create a simple Flask application

\- Dockerize the application

\- Automate Docker build using GitHub Actions

\- Understand CI (Continuous Integration)



\---



\## Step 1: Create Flask Application



File: app.py





from flask import Flask



app = Flask(name)



@app.route('/')

def home():

return "Hello from Docker CI/CD!"



if name == "main":

app.run(host='0.0.0.0', port=5000)





\---



\## Step 2: Create requirements.txt





Flask





\---



\## Step 3: Create Dockerfile





FROM python:3.9-slim



WORKDIR /app



COPY . .



RUN pip install -r requirements.txt



CMD \["python", "app.py"]





\---



\## Step 4: Test Locally



\### Build Image





docker build -t my-docker-app .





\### Run Container





docker run -p 5000:5000 my-docker-app





\### Output



Open browser:

http://localhost:5000





Hello from Docker CI/CD!





\---



\## Step 5: GitHub Actions Workflow



Path:

.github/workflows/ci-cd.yml





name: CI-CD Pipeline



on:

push:

branches:

\- main



jobs:

build:

runs-on: ubuntu-latest



steps:

&#x20; - name: Checkout Code

&#x20;   uses: actions/checkout@v4



&#x20; - name: Build Docker Image

&#x20;   run: docker build -t my-docker-app .



&#x20; - name: List Docker Images

&#x20;   run: docker images



\---



\## Step 6: Push to GitHub





git add .

git commit -m "Day13: GitHub Actions CI/CD with Docker"

git push origin main





\---



\## What Happens After Push



\- GitHub detects push to main branch

\- GitHub Actions workflow starts

\- Code is checked out

\- Docker image is built automatically

\- Build logs are shown in Actions tab



\---



\## Architecture



Developer Push

&#x20;     ↓

GitHub Repository

&#x20;     ↓

GitHub Actions Workflow

&#x20;     ↓

Docker Build (Cloud)

&#x20;     ↓

Output Logs



\---



\## Key Concepts Learned



\- CI (Continuous Integration)

\- GitHub Actions automation

\- Docker image build in cloud

\- Workflow YAML configuration

\- Dependency management using requirements.txt

\- Difference between manual and automated builds



\---



\## Difference from Previous Tasks



\- Earlier: Manual Docker build

\- Now: Automatic Docker build via GitHub Actions

\- Earlier: Local execution

\- Now: Cloud-based execution



\---



\## Conclusion



Today I created a CI/CD pipeline using GitHub Actions that automatically builds a Docker image whenever code is pushed. This is a foundational concept in modern DevOps workflows.

