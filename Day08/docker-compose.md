\# Day 08 - Docker Compose (Multi-Container Application)



\## Objective



\- Learn Docker Compose

\- Run multiple containers using a single YAML file

\- Understand container communication using service names

\- Use volumes for persistent storage

\- Debug container failures



\---



\## Docker Compose File



```yaml

services:

&#x20; frontend:

&#x20;   image: node:18-alpine

&#x20;   container\_name: frontend-app

&#x20;   command: sh -c "echo Frontend Running \&\& tail -f /dev/null"

&#x20;   ports:

&#x20;     - "3000:3000"

&#x20;   depends\_on:

&#x20;     - backend



&#x20; backend:

&#x20;   image: node:18-alpine

&#x20;   container\_name: backend-app

&#x20;   command: sh -c "echo Backend Running \&\& tail -f /dev/null"

&#x20;   environment:

&#x20;     DB\_HOST: db

&#x20;     DB\_PORT: 5432

&#x20;   depends\_on:

&#x20;     - db



&#x20; db:

&#x20;   image: postgres:15

&#x20;   container\_name: postgres-db

&#x20;   restart: always

&#x20;   environment:

&#x20;     POSTGRES\_DB: mydb

&#x20;     POSTGRES\_USER: postgres

&#x20;     POSTGRES\_PASSWORD: password

&#x20;   volumes:

&#x20;     - db\_data:/var/lib/postgresql/data

&#x20;   ports:

&#x20;     - "5432:5432"



volumes:

&#x20; db\_data:

Commands Used

Start all services

docker compose up -d

Check running containers

docker ps

View logs

docker logs frontend-app

docker logs backend-app

docker logs postgres-db

Stop all services

docker compose down

Key Concepts Learned

1\. Docker Compose

Runs multiple containers using a single file

Simplifies container management

2\. Automatic Networking

Docker Compose creates a network automatically

Containers communicate using service names



Example:



backend → db

3\. Service Architecture

Frontend → Backend → Database

Each service runs in its own container

4\. Volumes

db\_data stores PostgreSQL data

Data persists even after container removal

5\. Container Lifecycle

Containers stop when main process ends

Used tail -f /dev/null to keep containers running

6\. Debugging

Used docker logs to identify issues

Fixed missing files and command errors

Architecture Diagram

Frontend (Node)

&#x20;     ↓

Backend (Node)

&#x20;     ↓

Database (PostgreSQL)

Conclusion



Today I learned how to orchestrate multiple containers using Docker Compose, enabling communication between services and persistent data storage. This is a fundamental concept for building real-world applications.

