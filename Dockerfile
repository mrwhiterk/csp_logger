# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json app.js ./

# Install app dependencies
RUN npm install

# Expose the port where your app will run
EXPOSE 9000

# Set the command to run your app
CMD ["node", "app.js"]
