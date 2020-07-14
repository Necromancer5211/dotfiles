#!/usr/bin/env sh

## Add this to your wm startup file.

# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

source "${HOME}/.cache/wal/colors.sh"
background_wal=$color0
background_alt_wal=$color3
foreground_wal=$color15
foreground_alt_wal=$color2
highlight_wal=$color4

# Launch bar1 and bar2
polybar -c ~/.config/polybar/config.ini main &
