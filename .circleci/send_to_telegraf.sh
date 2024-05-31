#!/bin/bash

curl -X POST -H "Content-Type: application/xml" --data-binary "@cypress/reports/test-results.xml" http://localhost:8080/telegraf
