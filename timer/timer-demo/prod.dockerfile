
FROM nginx:alpine
WORKDIR /app
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' copy website to default nginx public folder
COPY /dist/timer /usr/share/nginx/html
WORKDIR /usr/share/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]