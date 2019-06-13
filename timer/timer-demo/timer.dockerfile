## Must be built to appropriate environment ahead of time.
## angular 8 not compiling in container..
FROM nginx:alpine
LABEL maintainer="PeteGrady" version="0.1" name="timer/homepage"
RUN apk add curl
WORKDIR /app
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' copy website to default nginx public folder
COPY /dist/timer /usr/share/nginx/html
WORKDIR /usr/share/nginx/
EXPOSE 80
HEALTHCHECK CMD curl --fail http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
