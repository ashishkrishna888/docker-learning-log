\# Day 12 - Maven Wrapper and Java Execution



\## Objective



\- Understand Maven Wrapper (mvnw)

\- Build Java project without installing Maven globally

\- Fix Java version compatibility issues

\- Run compiled Java application manually



\---



\## Step 1: Create Maven Project





mvn archetype:generate -DgroupId=com.example -DartifactId=demo-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false





\---



\## Step 2: Add Maven Wrapper





mvn -N io.takari:maven:wrapper





Generated files:



\- mvnw

\- mvnw.cmd

\- .mvn/



\---



\## Step 3: Build Using Wrapper





mvnw.cmd clean package





\---



\## Issue Faced





Source option 5 is no longer supported





\### Fix:



Added in `pom.xml`:



<properties> <maven.compiler.source>17</maven.compiler.source> <maven.compiler.target>17</maven.compiler.target> </properties> ```

Step 4: Verify Build Output

dir target



Output:



demo-app-1.0-SNAPSHOT.jar

Step 5: Run Application Manually

java -cp target/demo-app-1.0-SNAPSHOT.jar com.example.App

Output

Hello World!

Key Concepts Learned

mvn uses system-installed Maven

mvnw uses project-specific Maven (portable)

Maven Wrapper ensures consistent builds across environments

pom.xml controls Java version and build configuration

JAR file is compiled Java application

java -cp runs program using classpath

Architecture



Java Code

↓

Maven Wrapper Build (mvnw)

↓

target/\*.jar

↓

Java Runtime Execution



Conclusion



Today I learned how to use Maven Wrapper to build Java applications without relying on system-installed Maven and how to execute the compiled JAR manually using Java.

