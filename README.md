# BuildingMicroApp

## 注意事项：

- 非`wsl2`环境开发前删除 `config/dev.js` 的 `outputRoot` 字段。
- wsl2 环境将`config/dev.js` 的 `outputRoot` 字段指向 `/mnt/*(硬盘名)/xxx` 位置，将微信小程序工具的根目录指向该目录即可
