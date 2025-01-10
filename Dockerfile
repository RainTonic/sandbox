FROM node:22

WORKDIR /app

# Install nx globally
RUN npm install -g nx@latest

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . /app

# Expose ports for both Angular and NestJS
# Expose is NOT supported by heroku but can be used locally
EXPOSE 3000

RUN npm run build
RUN adduser -D nodeuser
USER nodeuser

# Start the application; $PORT is set by heroku
CMD ["npm", "start"]

