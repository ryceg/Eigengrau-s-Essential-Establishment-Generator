#!/bin/bash

f_in="$1"

# sed 's/\.//g' "$f_in" | sed 's/, .*$//g'
sed -E "s/^[0-9]+\. //g" "$f_in" | sed "s/, .*$//g" | sed -E "s/ +\(.+$//g" | grep -v "^$" | sed "s/^/'/" | sed "s/$/',/" | sort