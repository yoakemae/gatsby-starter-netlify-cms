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

何かのパッケージが足りない様です。
足りないパッケージをインストールしていきます。

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
