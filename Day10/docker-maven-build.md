\# Day 10 - Maven Build Using Docker Compose



\## Objective

Build a Java Maven project using Docker container instead of installing Maven locally.



\---



\## Docker Image Used



maven:3.9.10-eclipse-temurin-17



This image contains:

\- Maven 3.9.10

\- OpenJDK 17

\- Build tools



\---



\## docker-compose.yml



services:

&#x20; maven-build:

&#x20;   image: maven:3.9.10-eclipse-temurin-17

&#x20;   container\_name: maven-build

&#x20;   working\_dir: /app

&#x20;   volumes:

&#x20;     - .:/app

&#x20;     - \~/.m2:/root/.m2

&#x20;   command: mvn clean install



\---



\## Commands Used



Start build container:



docker compose up -d



Check container:



docker ps



Stop container:



docker compose down



\---



\## Project Structure



Day10/

│

├── docker-compose.yml

├── pom.xml

└── src/

&#x20;   └── main/

&#x20;       └── java/



After build:



target/

&#x20;   └── \*.jar



\---



\## What Happens Internally



1\. Docker compose starts Maven container

2\. Local folder mounted to /app

3\. Maven runs inside container

4\. pom.xml is read

5\. Java source compiled

6\. JAR file created in target/



\---



\## Volume Mapping



.:/app



This maps local project into container.



\~/.m2:/root/.m2



This caches Maven dependencies.



\---



\## Build Command



mvn clean install



This performs:

\- clean

\- compile

\- test

\- package

\- install



\---



\## Output



target/



This folder contains compiled project:



target/\*.jar



\---



\## Architecture



Host Project

&#x20;    ↓

Docker Maven Container

&#x20;    ↓

mvn clean install

&#x20;    ↓

target/\*.jar created



\---



\## Key Learnings



\- Docker can be used for build environments

\- No need to install Maven locally

\- Volume mount shares project with container

\- Maven dependencies cached using \~/.m2

\- docker compose can run build pipelines

\- target folder indicates successful build



\---



\## Conclusion



Today I used Docker Compose with Maven image to build a Java project inside a container and generate the JAR file using mvn clean install.

