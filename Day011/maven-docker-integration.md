\# Day 11 - Maven + Docker Integration



\## Objective



\- Build Java application using Maven

\- Create executable JAR file

\- Use Dockerfile to containerize application

\- Integrate Docker build with Maven using plugin

\- Run Java application inside Docker container



\---



\## Step 1: Create Maven Project

mvn archetype:generate -DgroupId=com.example -DartifactId=docker-maven-demo -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false





\---



\## Step 2: Modify Java Code



File: src/main/java/com/example/App.java





public class App {

public static void main(String\[] args) {

System.out.println("🚀 Hello from Maven + Docker Integration!");

}

}





\---



\## Step 3: Build JAR





mvn clean package





Output:





target/docker-maven-demo-1.0-SNAPSHOT.jar





\---



\## Step 4: Create Dockerfile





FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY target/docker-maven-demo-1.0-SNAPSHOT.jar app.jar

ENTRYPOINT \["java","-jar","app.jar"]





\---



\## Step 5: Update pom.xml



Added:



\- maven-jar-plugin → to make executable JAR

\- dockerfile-maven-plugin → to build Docker image



\---



\## Step 6: Build Docker Image Using Maven





mvn dockerfile:build





\---



\## Step 7: Verify Image





docker images





\---



\## Step 8: Run Container





docker run docker-maven-demo:1.0-SNAPSHOT





Output:





🚀 Hello from Maven + Docker Integration!





\---



\## Architecture



Java Code

&#x20;  ↓

Maven Build (JAR)

&#x20;  ↓

Docker Image

&#x20;  ↓

Container

&#x20;  ↓

Application Runs



\---



\## Key Learnings



\- Maven builds Java applications into JAR files

\- Executable JAR requires Main-Class in manifest

\- Dockerfile defines how application runs

\- dockerfile-maven-plugin allows Maven to build Docker images

\- Containers run applications in isolated environments

\- This setup simulates a CI/CD build pipeline



\---



\## Conclusion



Today I integrated Maven with Docker to build and run a Java application inside a container. This demonstrates how modern applications are packaged and deployed in real-world DevOps workflows.

