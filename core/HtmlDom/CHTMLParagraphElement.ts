import CHTMLElement from './CHTMLElement';

class CHTMLParagraphElement extends CHTMLElement<HTMLParagraphElement> {
  public el: HTMLParagraphElement;

  constructor() {
    super();
    const html = document.createElement('p');
    this.el = html;
  }

  public align(align: string) {
    this.el.align = align;
    return this;
  }
}

export function p() {
  return new CHTMLParagraphElement();
}
