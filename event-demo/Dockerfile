# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN pnpm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app for production
RUN pnpm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "run", "start"]