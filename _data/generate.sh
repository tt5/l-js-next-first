#!/bin/bash

cat input | jq '{posts: [{title: .titles} | .[] | foreach .[] as $i (0; . + 1; {id: ., title: $i, body: "body\(.)"})]}'
