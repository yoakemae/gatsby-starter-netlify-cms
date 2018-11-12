---
templateKey: blog-post
title: Windows Subsystem for Linux (WSL) で Electron
date: 2018-10-22T14:54:28.391Z
description: Windows Subsystem for Linux (WSL) で Electron を 動かす際に躓いた点をメモしました。
image: /img/mo17923imgl7531_tp_v.jpg
tags:
  - Electron
  - Windows Subsystem for Linux
---
<div class="box"> <article class="media"> <div class="media-left"> <a href="https://qiita.com/EBIHARA_kenji/items/e6da1c3d6d16cf07b60a" target="_blank"> <figure class="image is-128x128"> <img src="http://capture.heartrails.com/120x120/shorten?https://qiita.com/EBIHARA_kenji/items/e6da1c3d6d16cf07b60a" alt="Image"> </figure> </a> </div> <div class="media-content"> <div class="content"> <p> <a href="https://qiita.com/EBIHARA_kenji/items/e6da1c3d6d16cf07b60a" target="_blank"><strong>Electron & React & Redux & TypeScript アプリ作成ワークショップ 2日目 - Qiita</strong></a> <a href="http://b.hatena.ne.jp/entry/https://qiita.com/EBIHARA_kenji/items/e6da1c3d6d16cf07b60a" target="_blank"><img border="0" src="http://b.hatena.ne.jp/entry/image/https://qiita.com/EBIHARA_kenji/items/e6da1c3d6d16cf07b60a" border="0" alt="" /></a> <br> Electron &amp; React &amp; Redux &amp; TypeScript アプリ作成ワークショップ 2日目 - Qiita </p> </div> </div> </article> </div>	

こちらのワークショップを Windows Subsystem for Linux (WSL) でやっていたら、electronの実行でエラーになりました。

```bash
$ ./node_modules/.bin/electron ./
error while loading shared libraries: libgtk-3.so.0: cannot open shared object file: No such file or directory
```

共有ライブラリ(shared library)が足りない様です。\
エラーメッセージに表示されているファイル名を`apt-file search`で調べて、調べたパッケージを`apt-get install`していきました。

```bash
$ sudo apt install apt-file
$ sudo apt-file update
$ apt-file search libgtk-3.so.0
$ sudo apt-get install libgtk-3-0
$ apt-file search libXss.so.1
$ sudo apt-get install libxss1
$ apt-file search libgconf-2.so.4
$ sudo apt-get install libgconf-2-4
$ apt-file search libnss3.so
$ sudo apt-get install libnss3
$ apt-file search libasound.so.2
$ sudo apt-get install libasound2
```

これでエラーは出なくなりましたが、まだ何も起動しません。\
ここでかなり悩みましたが、ある勘違いをしていることに気づきました。

## X Window System のインストール

Electronを動かしたらWindowsのUIで表示されると思い込んでいましたが、\
WSLはLinuxなので X Window System をインストールをする必要がありました。

```bash
$ sudo apt-get install x11-apps x11-utils x11-xserver-utils fonts-ipafont
```

これでWSLに X Window System がインストールできました。\
そして、環境変数を設定します。

```bash
$ echo 'export DISPLAY=localhost:0.0' >> ~/.bashrc
$ source ~/.bashrc
```

## VcXsrv Windows X Server のインストール

そして、次にWindowsにX Serverをインストールしました。\
使ったのは下記のVcXsrvです。

[VcXsrv Windows X Server download | SourceForge.net](https://sourceforge.net/projects/vcxsrv/)	

## Electronの起動

ここまでやってElectronを起動すると、漸く表示できました。

```bash
$ ./node_modules/.bin/electron ./
```

![Electron](/img/electron.png)

## 参考

* [ElectronをWindowsのBash(WSL)で試してみて成功しなかった - いがにんのぼやき](http://igatea.hatenablog.com/entry/2018/02/11/004142)
* [WSL上でElectronの環境構築 – にっき](https://yukushige.com/blog/?p=129)
* [Windows Subsystem for Linux + VcXsrv + RubyMine でWindowsでも快適なRails開発環境を作ろう - Qiita](https://qiita.com/fukuramikake/items/283b817c16725af79a28)
