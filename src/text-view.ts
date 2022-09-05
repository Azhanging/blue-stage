import { View } from "./view";
import type { PartialViewOptions } from "./types";

type TextViewOptions = PartialViewOptions & {
  content: string;
};

export class TextView extends View {
  content: string;
  constructor(options: TextViewOptions) {
    super(
      Object.assign({}, options, {
        type: `text`,
      })
    );
    this.content = options.content;
  }
  render() {
    const ctx = this.getCanvasContext();
    this.path(() => {
      const parent = this.parent;
      ctx.fillText(this.content, parent.x + this.x, parent.y + this.y);
    });
    this.renderChildren();
  }
}
