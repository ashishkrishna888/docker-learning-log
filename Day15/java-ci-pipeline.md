\# Day 15 - Java CI Pipeline using GitHub Actions



\## Objective



\- Automate build and testing of a Java Maven project

\- Configure GitHub Actions for CI (Continuous Integration)

\- Archive build artifacts (JAR file)



\---



\## Workflow File Location



.github/workflows/ci.yml



\---



\## CI Pipeline Steps



\### 1. Checkout Repository





uses: actions/checkout@v4





\- Downloads project code into GitHub runner



\---



\### 2. Setup Java (JDK 21)





uses: actions/setup-java@v4





\- Installs Java in CI environment

\- Ensures compatibility with project



\---



\### 3. Verify Java Version





java -version





\- Debug step to confirm correct JDK is used



\---



\### 4. Build Project





mvn clean install





\- Compiles code

\- Downloads dependencies

\- Generates JAR file



\---



\### 5. Run Tests





mvn test





\- Executes unit tests



\---



\### 6. Upload Artifact





uses: actions/upload-artifact@v4





\- Stores generated JAR file

\- Accessible from GitHub Actions UI



\---



\## Issues Faced \& Fixes



\### Issue 1: No POM file found

\- Cause: Wrong working directory

\- Fix: Set correct path to Maven project



\---



\### Issue 2: Java version mismatch



Error:



release version 21 not supported





\- Cause: CI used Java 17 while project required Java 21

\- Fix: Updated workflow to use JDK 21



\---



\## Final Workflow Highlights



\- Runs on every push

\- Builds project automatically

\- Runs tests

\- Stores build output



\---



\## Architecture



Developer Push

&#x20;     ↓

GitHub Actions

&#x20;     ↓

Setup Java Environment

&#x20;     ↓

Maven Build \& Test

&#x20;     ↓

JAR Artifact Stored



\---



\## Key Concepts Learned



\- CI (Continuous Integration)

\- GitHub Actions workflow structure

\- Maven build lifecycle

\- Java environment setup in CI

\- Artifact management



\---



\## Conclusion



Successfully created a CI pipeline for a Java project that automates build, testing, and artifact storage using GitHub Actions.

