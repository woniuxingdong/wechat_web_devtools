# Linux微信web开发者工具

This repo is just forked from [cytle/wechat_web_devtools](https://github.com/cytle/wechat_web_devtools)
For detailed information, check the original repo.



### Installation 

1. Install [wine](https://wiki.winehq.org/Download) if you'd like to use *GUI*

2. Install wechat web devtools

``` bash
git clone https://github.com/cytle/wechat_web_devtools.git
cd wechat_web_devtools
./bin/wxdt install
```

### Usage of wechat web devtool

1. *GUI*

``` bash
./bin/wxdt # start 
```

### CLI & HTTP invocation

`./bin/cli`

端口号文件位置：`~/.config/wechat_web_devtools/Default/.ide`

微信文档参考:
- [命令行 调用 · 小程序](https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html)
- [HTTP 调用 · 小程序](https://developers.weixin.qq.com/miniprogram/dev/devtools/http.html)

### Docker

未安装`wine`，仅限`cli`调用

可以直接`run`

``` bash
docker run -it \
    -v $PWD:/projects \
    canyoutle/wxdt \
    sh -c "cli -l && cli -p /projects/your-project"
```

或是启动一个持久的容器

``` bash
docker run -d \
    --name wxdt \
    -p 6080:80 \
    -v $PWD:/projects \
    canyoutle/wxdt

docker exec -it wxdt cli -l # 登录
docker exec -it wxdt cli -p /projects/your-project # 预览工程

docker stop wxdt # 暂停容器
docker start wxdt # 下次使用，不用再run，可以直接exec
```

### Update

``` bash
git pull origin
```

### Uninstallation

1. 关闭 `微信web开发者工具`
2. 项目文件夹下运行 `./bin/wxdt uninstall` (删除桌面图标、微信web开发者工具配置目录),
   **开发者工具配置文件, 所有工程和登录信息均会消失**
3. 删除项目文件夹

