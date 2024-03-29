import CElement from './CElement';

export default class CHTMLElement<T> extends CElement {
  public declare el?: HTMLElement;

  constructor() {
    super();
    this.initReadOnly();
  }

  private initReadOnly() {}

  public accessKey(value: string) {
    if (this.el) {
      this.el.accessKey = value;
    }
    return this;
  }

  public autoFocus(value: boolean) {
    if (this.el) {
      this.el.autofocus = value;
    }
    return this;
  }

  public contentEditable(value: 'true' | 'false' | 'plaintext-only') {
    if (this.el) {
      this.el.contentEditable = value;
    }
    return this;
  }

  public dir(value: 'ltr' | 'rtl' | 'auto') {
    if (this.el) {
      this.el.dir = value;
    }
    return this;
  }

  public draggable(value: boolean) {
    if (this.el) {
      this.el.draggable = value;
    }
    return this;
  }

  public enterKeyHint(value: string) {
    if (this.el) {
      this.el.enterKeyHint = value;
    }
    return this;
  }

  public hidden(value: boolean) {
    if (this.el) {
      this.el.hidden = value;
    }
    return this;
  }

  public inert(value: boolean) {
    if (this.el) {
      this.el.inert = value;
    }
    return this;
  }

  public innerText(value: string) {
    if (this.el) {
      this.el.innerText = value;
    }
    return this;
  }

  public lang(value: string) {
    if (this.el) {
      this.el.lang = value;
    }
    return this;
  }

  public nonce(value: string) {
    if (this.el) {
      this.el.nonce = value;
    }
    return this;
  }

  public outerText(value: string) {
    if (this.el) {
      this.el.outerText = value;
    }
    return this;
  }

  public popover(value: string) {
    if (this.el) {
      this.el.title = value;
    }
    return this;
  }

  public spellcheck(value: boolean) {
    if (this.el) {
      this.el.spellcheck = value;
    }
    return this;
  }

  public style(value: CSSStyleDeclaration | Record<string, string>) {
    if (this.el) {
      // this.el.style.cssText = value;
      Object.assign(this.el.style, value);
    }
    return this;
  }

  public tabIndex(value: number) {
    if (this.el) {
      this.el.tabIndex = value;
    }
    return this;
  }

  public title(value: string) {
    if (this.el) {
      this.el.title = value;
    }
    return this;
  }

  public translate(value: boolean) {
    if (this.el) {
      this.el.translate = value;
    }
    return this;
  }

  public children(...value: (Node | string)[]) {
    if (this.el) {
      this.el.append(...value);
    }
    return this;
  }

  public ref(value: { current: HTMLElement | null }) {
    if (this.el) {
      value.current = this.el;
    }
    return this;
  }

  public callback(callback: (el: HTMLElement) => void) {
    if (this.el) {
      callback(this.el);
    }
    return this;
  }

  public get() {
    return this.el as T;
  }
}
