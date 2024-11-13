#!/bin/bash
$npm_execpath db:push 2>&1 >/dev/null | grep ECONNREFUSED >/dev/null
if [ $? -eq 1 ]; then
    echo -e "\n\n❌ Note! Error running db:push, you may need to set up and run your db. See README.md\n\n"
    exit 1
fi 