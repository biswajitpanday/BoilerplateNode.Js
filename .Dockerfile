
# Test web app that returns the name of the host/pod/container servicing req
# Linux x64
FROM node:12-alpine

LABEL org.opencontainers.image.title="BoilerPlateNodeJs" \
      org.opencontainers.image.description="BoilerPlate NodeJs structure with TypeScript" \
      org.opencontainers.image.authors="@biswajitpanday"

# Create directory in container image for app code
RUN mkdir -p /usr/app
# Set working directory context
WORKDIR /usr/app
# Copy app code (.) to /usr/src/app in container image
COPY package.json tsconfig.json wait.sh ./
COPY src ./src
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm install

EXPOSE 5001
CMD /wait && npm start