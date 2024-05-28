ARG BASE_TEST_IMAGE

FROM ${BASE_TEST_IMAGE}
ENV CI=1
COPY . /opt/app
WORKDIR /opt/app
RUN npm install --save-dev cypress
