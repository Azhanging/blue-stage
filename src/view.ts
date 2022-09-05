import { CanvasEvent } from "./event";
import type { Stage } from "./stage";
import type { ViewOptions, PartialViewOptions } from "./types";
import { hook } from "./utils";

//默认值
const defaultViewOptions: ViewOptions = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  display: true,
  opacity: 1,
  type: `view`,
  fillStyle: ``,
};

//基础视图
export class View extends CanvasEvent {
  //配置
  options: PartialViewOptions;
  //子级
  children: View[];
  //父级
  parent: View | null;
  //类型
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(_options: PartialViewOptions) {
    super();
    this.options = Object.assign({}, defaultViewOptions, _options);
    const { options } = this;
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.children = [];
  }
  stage: Stage | null;
  //插入到子节点
  append(children: View) {
    children.parent = this;
    //设置舞台
    this.setStage();
    this.children.push(children);
  }
  //设置舞台
  setStage() {
    //舞台将会一直传递
    if (!this.stage) {
      this.stage = this.parent ? this.parent.stage : null;
    }
    this.children.forEach((view: View) => {
      view.setStage();
    });
  }
  //渲染
  render(handler?: Function) {
    hook(this, handler);
    this.renderChildren();
  }
  renderChildren() {
    this.children.forEach((view: View) => {
      if (!view.stage) return;
      view.render();
    });
  }
  path(handler: Function) {
    const ctx = this.getCanvasContext();
    ctx.beginPath();
    hook(this, handler);
    ctx.closePath();
  }
  getCanvasContext() {
    return this.stage.canvasCtx;
  }
}
