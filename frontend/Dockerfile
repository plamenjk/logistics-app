FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json vite.config.ts ./
COPY src ./src
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
