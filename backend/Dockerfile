FROM node:18-alpine
WORKDIR /app
COPY package*.json tsconfig.json ormconfig.ts ./
COPY src ./src
RUN npm ci --only=production && npm run build
EXPOSE 3001
CMD ["npm", "start"]
