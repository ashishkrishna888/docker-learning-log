docker network create mynet

2\. Run First Container (Web Server)

docker run -d --name webserver --network mynet -p 8081:80 nginx



Explanation:



Option	Meaning

\-d	Run in background

\--name webserver	Container name

\--network mynet	Attach to network

\-p 8081:80	Host → container port

nginx	Image

3\. Run Second Container (Test Client)



⚠ Important: The test container does not need port mapping.



docker run -it --name testclient --network mynet alpine sh



This attaches the container to the same network.



4\. Verify Both Containers Are in the Network



Run:



docker network inspect mynet



Expected output will include:



webserver

testclient

5\. Test Communication Between Containers



Inside the testclient container:



Install curl:



apk add curl



Access the webserver container using its container name:



curl http://webserver



Expected output:



Welcome to nginx!



This works because Docker provides internal DNS resolution.



6\. Network Architecture (Write in Exam)

Docker Bridge Network (mynet)

&#x20;       │

&#x20;┌──────────────┬──────────────┐

&#x20;│              │              │

webserver     testclient

&#x20;(nginx)       (alpine)

&#x20;       │

&#x20;       ▼

Internal Docker DNS

webserver → container IP





Containers in the same Docker network can communicate using container names instead of IP addresses.



Example:



curl http://webserver

8\. Common Mistake (Your Earlier Error)



You likely tried something like:



docker run -p 8080:80 ...



for both containers.



This causes a port conflict because only one container can bind to the host port.



Solution:



Only the webserver container needs port mapping



The test container communicates internally



9\. Final Command Sequence

docker network create mynet



docker run -d --name webserver --network mynet -p 8081:80 nginx



docker run -it --name testclient --network mynet alpine sh



apk add curl



curl http://webserver

