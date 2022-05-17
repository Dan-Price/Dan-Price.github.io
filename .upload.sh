#!/bin/bash
# prints the input
echo 'Saving to Github' 
echo 'Commit name:'
echo $1 

git add --all
git commit -m $1
git push -u origin master

