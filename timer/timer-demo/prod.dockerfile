
# STEP 1 build static website
FROM node:11.15-alpine as builder
## pass in either build-prod or build in the npm run.
ARG build-type
# RUN npm i -g @angular/cli
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package.json package-lock.json /app/
#RUN cd /app && npm install
RUN npm ci
# Copy project files into the docker image
COPY .  /app
# RUN cd /app && npm run $build-type
RUN npm run build-prod

# STEP 2 build a small nginx image with static website
FROM nginx:alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' copy website to default nginx public folder
COPY --from=builder /app/dist/timer /usr/share/nginx/html
WORKDIR /usr/share/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]