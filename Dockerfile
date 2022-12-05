FROM node:16-alpine as development

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile

# Copy source (see .dockerignore)
COPY . .

RUN yarn dev

ENV PORT 8080

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

ENV PORT 8080

CMD ["yarn", "start"]