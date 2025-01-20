## Coding Assignment 11

1. Create empty folder and clone repo from GitHub using
git clone git@github.com:avcxmgs/dockerfile.git

2. Navigate to the folder:
cd dockerfile/santos_margareth_site

3. Start Docker Desktop

4. Build and tag the Docker image:
docker build . -t "coding_assignment_11:v1.0"

5. Build the image and start the container:
docker run -t -i -p 7775:7775 --name=santos_margareth_coding_assignment11 coding_assignment_11:v1.0

6. Check on a browser that the web application is running:
http://localhost:7775/

7. Stop the container:
q + enter