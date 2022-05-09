#!/bin/bash
tmux new -s bobt
tmux send-keys -t bobt "/usr/bin/node main.js" ENTER
tmux a -t bobt


