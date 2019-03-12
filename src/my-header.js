import { LitElement, html } from 'lit-element'
class MyHeader extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <style>
        header {
          background-color: #5EAF03;
          color: #fff;
          height: 40px;
          line-height: 40px;
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100%;
        }
        .back {
          padding: 0px 20px 0px 10px;
          font-weight: 700;
        }
        .title {
          text-align: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      </style>
      <header>
        <span class="back">&#60</span>
        <span class="title">
          <slot name="title"></slot>
        </span>
      </header>
    `;
  }
}
window.customElements.define('my-header', MyHeader)