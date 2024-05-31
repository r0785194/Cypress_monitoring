#!/bin/bash

curl -X POST -H "Content-Type: application/xml" --data-binary "/home/circleci/project/factory/container/test-results.xml" http://localhost:8080/telegraf
