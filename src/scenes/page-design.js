import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { injectTheme } from '#decorators/theme.js';

@customElement('page-design')
class PageDesign extends LitElement {
  @injectTheme() static styles;

  render() {
    return html` <div class="p-box rounded-box mt-4 bg-white">GFX design examples coming soon</div> `;
  }

  createRenderRoot() {
    return this;
  }
}

export { PageDesign };
