#!/bin/bash

curl -X POST -H "Content-Type: application/xml" --data-binary "@target/surefire-reports/TEST-Setup.RunnerTest.xml" http://localhost:8080/telegraf
