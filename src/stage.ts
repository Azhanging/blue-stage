import { View } from "./view";
import type { PartialViewOptions } from "./types";

type StageOptions = PartialViewOptions & {
  el: string;
  root: Stage;
};

function init(this: Stage) {
  const { options } = this;
  const canvasElm: HTMLCanvasElement = document.querySelector(options.el);
  canvasElm.width = options.width;
  canvasElm.height = options.height;
  this.canvasElm = canvasElm;
  this.canvasCtx = canvasElm.getContext("2d");
}

export class Stage extends View {
  canvasElm: HTMLCanvasElement;
  canvasCtx: CanvasRenderingContext2D;
  options: StageOptions;
  stage: Stage;
  constructor(options: StageOptions) {
    super(
      Object.assign(options, {
        type: `stage`,
      })
    );
    this.stage = this;
    init.call(this);
  }
  //插入到子节点
  append(children: View) {
    children.parent = this;
    this.children.push(children);
    this.setStage();
  }
}
