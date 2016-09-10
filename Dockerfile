FROM node:6.4
ENV PROJECT_NAME im-admin-seed
MAINTAINER hjl <jiale@implustech.com>

# httpredir.debian.org is 'magic', so do steps below:
# - go httpredir.debian.org/demo.html find the static domain, in my case http://debian-mirror.sakura.ne.jp/debian/
# - replace the origin httpredir.debian.org with it
RUN sed -i "s/httpredir.debian.org/debian-mirror.sakura.ne.jp/" /etc/apt/sources.list

RUN apt-get update \
    && apt-get install git-core \
    && rm -rf /var/lib/apt/lists/*
RUN mkdir /app
WORKDIR /app

RUN npm install ts-node typescript@beta -g
COPY package.json /app/package.json
COPY . /app
RUN npm install

# Port 5555 for browserSync server
# Port 35729 for livereload
EXPOSE 3030

# ENV NODE_ENV production

# CMD ["npm", "start"]
RUN npm run build:dev
CMD ["ts-node", "server.ts"]
