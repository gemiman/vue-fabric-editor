import EventEmitter from 'events';
import hotkeys from 'hotkeys-js';

class Editor extends EventEmitter {
  canvas: fabric.Canvas;
  private pluginMap: {
    [propName: string]: IPluginTempl;
  } = {};
  // 自定义事件
  private customEvents: string[] = [];
  // 自定义API
  private customApis: string[] = [];
  // 生命周期函数名
  private hooks: IEditorHooksType[] = ['hookSaveBefore', 'hookSaveAfter'];
  constructor(canvas: fabric.Canvas) {
    super();
    this.canvas = canvas;
    this._bindContextMenu();
  }

  // 引入组件
  use(plugin: IPluginClass, options: IPluginOption) {
    if (this._checkPlugin(plugin)) {
      this._saveCustomAttr(plugin);
      const pluginRunTime = new plugin(this.canvas, this.canvas, options);
      this.pluginMap[plugin.pluginName] = pluginRunTime;
      this._bindingHooks(pluginRunTime);
      this._bindingHotkeys(pluginRunTime);
    }
  }

  // 获取插件
  getPlugin(name: string) {
    if (this.pluginMap[name]) {
      return this.pluginMap[name];
    }
  }

  // 检查组件
  private _checkPlugin(plugin: IPluginClass) {
    const { pluginName, events = [], apis = [] } = plugin;
    //名称检查
    if (this.pluginMap[pluginName]) {
      throw new Error(pluginName + '插件重复初始化');
    }
    events.forEach((eventName: string) => {
      if (this.customEvents.find((info) => info === eventName)) {
        throw new Error(pluginName + '插件中' + eventName + '重复');
      }
    });

    apis.forEach((apiName: string) => {
      if (this.customApis.find((info) => info === apiName)) {
        throw new Error(pluginName + '插件中' + apiName + '重复');
      }
    });
    return true;
  }

  // 绑定hooks方法
  private _bindingHooks(plugin: IPluginTempl) {
    this.hooks.forEach((hookName) => {
      const hook = plugin[hookName];
      if (hook) {
        this.on(hookName, hook);
      }
    });
  }

  // 绑定快捷键
  private _bindingHotkeys(plugin: IPluginTempl) {
    plugin.hotkeys.forEach((keyName: string) => {
      hotkeys(keyName, (e) => plugin.hotkeyEvent(keyName, e));
    });
  }

  // 保存组件自定义事件与API
  private _saveCustomAttr(plugin: IPluginClass) {
    const { events = [], apis = [] } = plugin;
    this.customApis = this.customApis.concat(apis);
    this.customEvents = this.customEvents.concat(events);
  }

  // 右键菜单
  private _bindContextMenu() {
    this.canvas.on('mouse:down', (opt) => {
      if (opt.button === 3) {
        const menu: IPluginMenu[] = [];
        Object.keys(this.pluginMap).forEach((pluginName) => {
          const pluginMenu = this.pluginMap[pluginName].contextMenu();
          if (pluginMenu) {
            menu.push(pluginMenu);
          }
        });
        this._renderMenu(opt, menu);
      }
    });
  }

  // 渲染右键菜单
  private _renderMenu(opt: fabric.IEvent, menu: IPluginMenu[]) {
    console.log(opt, menu);
  }
}

export default Editor;
