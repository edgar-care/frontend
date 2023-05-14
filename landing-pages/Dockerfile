FROM node:16-alpine as development

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile

# Copy source (see .dockerignore)
COPY . .

ENV PORT 3000

CMD ["yarn", "dev"]

FROM node:16-alpine as production

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile

# Copy source (see .dockerignore)
COPY . .

# Build the app
RUN yarn build

ENV PORT 3000

CMD ["yarn", "start"]