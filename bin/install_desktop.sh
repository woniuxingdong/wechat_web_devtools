#!/bin/bash
# install desktop

ROOT_DIR=$(cd `dirname $0`/.. && pwd -P)

fdesktop="${ROOT_DIR}/dist/wechat_dev_tools.desktop"

sed -r -e 's/\/path\/to/'${ROOT_DIR//\//\\\/}'/g' "${ROOT_DIR}/desktop.example" > "${fdesktop}"


# If we're using english env, just rename it to use english name
if [ `env | grep LANG | grep '=en_'` ];then
  sed -i 's/\(Name=\).*/\1wechat web devtools/g' "${fdesktop}"
fi


if type desktop-file-install >/dev/null 2>&1; then
  desktop-file-install "${fdesktop}" --dir=$HOME/.local/share/applications
else
  echo 'no exists desktop-file-install, copy to Desktop and applications'
  if [ -d "$HOME/.local/share/applications" ]; then
    cp "${fdesktop}" $HOME/.local/share/applications/
  fi

  if [ -d "$HOME/Desktop" ]; then
    cp "${fdesktop}" $HOME/Desktop/
  fi
fi
