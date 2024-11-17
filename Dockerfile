# Use Bun base image
FROM oven/bun:latest

# Install git to clone the repository
RUN apt-get update && apt-get install -y git

WORKDIR /app

# Clone the GitHub repository (you can specify a specific branch if needed)
RUN git clone https://github.com/henningsieh/henningsieh.de.git .  # Clones directly into the /app directory

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Build the application
RUN bun run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
