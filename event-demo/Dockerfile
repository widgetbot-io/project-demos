# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Label the image
LABEL org.opencontainers.image.source=https://github.com/widgetbot-io/project-demos

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy all contents to working dir
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app for production
RUN pnpm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "run", "start"]