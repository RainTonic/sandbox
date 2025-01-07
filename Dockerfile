FROM node:22

WORKDIR /app

# Install nx globally
RUN npm install -g nx@latest

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose ports for both Angular and NestJS
# EXPOSE 4200

RUN npm run build

# Start the application
CMD ["npm", "start"]