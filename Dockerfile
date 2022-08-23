# syntax=docker/dockerfile:1

# Dockerfile for running Eigengrau's Essential Establishment Generator
#
# Build with:
#     docker build --tag=eeeg:latest .
#
# To run a server on localhost:8080, use:
#     docker run -p 8080:80 eeeg:latest
#
# The container is using nodejs's http-server to run a basic static webserver on :80.
# You can either visit the container's IP address (172.17.something) or bind it to the
# host system with the `-p [host port]:[container port]` option.


# For now, base this off the latest Node+Alpine Docker image.
# Eventually, we'll want to pin to a fixed version, so we can review updates for breaking changes (e.g. changes to libraries included).
FROM node:alpine
ENV NODE_ENV=production

# Inside the image use the /eeeg directory.
WORKDIR /eeeg
RUN npm install http-server -g

# The Dockerfile is expected to sit within the git repository, in the root directory.
# Add the repo contents, then install dependencies.
COPY package.json yarn.lock /eeeg/
COPY scripts/ /eeeg/scripts/

RUN yarn install -g
RUN yarn install-compiler

# Make the tweego binary executable.
RUN chmod +x /eeeg/.twine/tweego

# Copy other files into the Docker image.
COPY gh-pages/ /eeeg/gh-pages/
COPY main.ejs DeitySchema.json global.d.ts sugarcube.d.ts tsconfig.json jsconfig.json /eeeg/
COPY lib/ /eeeg/lib/
COPY src/ /eeeg/src/

# Build
RUN yarn build

# Run!
EXPOSE 80 
CMD ["http-server", "/eeeg/gh-pages/", "-p", "80"]
