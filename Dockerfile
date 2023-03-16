FROM node:16-alpine AS build

WORKDIR /app

COPY package.json /app
COPY yarn.lock .
RUN yarn install

COPY . /app
RUN yarn build


FROM nginx:1.21.0-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]