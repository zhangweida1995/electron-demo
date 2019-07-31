const { Menu } = require('electron');

const menu = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建文件',
        accelerator: 'ctrl+n',
        click() {
          console.log('新建文件');
        },
      },
      {
        label: '新建窗口',
        click() {
          console.log('新建窗口');
        },
      },
    ],
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '复制',
        role: 'copy', // 调用内置角色实现对应功能
      },
      {
        label: '剪切',
        role: 'cut', // 调用内置角色实现对应功能
      },
    ],
  },
  {
    label: '视图',
    submenu: [
      {
        label: '浏览',
      },
      {
        label: '搜索',
      },
    ],
  },
];
const m = Menu.buildFromTemplate(menu);

Menu.setApplicationMenu(m);
