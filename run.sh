#!/bin/bash
tmux new-session -s N-A-M -d
tmux send -t N-A-M "node main.js" ENTER
