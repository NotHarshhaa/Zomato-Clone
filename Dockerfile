# Use an official Node.js image as the base (LTS version for stability)
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (Leverage Docker cache)
COPY package*.json ./

# Install dependencies in a clean environment
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Build the React app
RUN npm run build

# ---- Production Stage ----
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built React app from the builder stage
COPY --from=builder /app .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
