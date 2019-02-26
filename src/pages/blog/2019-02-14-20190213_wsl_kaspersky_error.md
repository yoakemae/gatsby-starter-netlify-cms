---
templateKey: blog-post
title: Windows Subsystem for Linux (WSL) で pipenv install がエラーになる
date: 2019-02-13T15:25:25.943Z
description: aa
image: /img/mo17923imgl7531_tp_v.jpg
tags:
  - Windows Subsystem for Linux
---
wslでpipenv installしたら通信エラーになりました。

```bash
$ pipenv install pandas
...
No versions found
Was https://pypi.org/simple reachable?
```

調べてみると、Kasperskyを使っているとapt-getが失敗することがあるらしい。

[WSLが9月頃からおかしくなった\.\.\. \- Qiita](https://qiita.com/Y_Aowashi/items/d355d90945305d925a3c)		

pipenvもそれと同じではと思い、Kasperskyの設定を変更してみたところ無事に成功するようになりました。

## 手順

カスペルスキーの設定画面を開き、詳細タブのネットワークを選択する

![Kaspersky設定](/img/kaspe001.png)

 ​ 

設定したネットワークポートを監視するを選択する

![Kaspersky設定](/img/kaspe002.png)

 ​ 

ネットワークポートのHTTPS:443とHTTP:80が有効になっていたら無効に変更する

![Kaspersky設定](/img/kaspe003.png)



![](/img/kaspe004.png)

この後で、pipenv install すると通信エラーが出なくなります。
