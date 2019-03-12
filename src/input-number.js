import { LitElement, html } from 'lit-element'
class inputNumber extends LitElement {
    static get properties() {
      return {
        value: { type: Number }
      }
    }

    constructor() {
      super()
      this.value = 0
    }

    render() {
      return html`
        <style>
          .inputBox {
            display: inline-block;
            text-align: center;
            height: 30px;
            line-height: 30px;
          }
          .inputBox > span {
            float: left;
          }
          .minus, .add {
            display: inline-block;
            width: 50px;
            height: 32px;
            background-color: orange;
            font-size: 16px;
          }
          .number-value {
            display: inline-block;
            width: 70px;
            border: 1px solid orange;
          }
        </style>
        <div class="inputBox">
          <span class="minus">-</span>
          <span class="number-value">
            ${this.value}
          </span>
          <span class="add">+</span>
        </div>
      `
    }
}
window.customElements.define('input-number', inputNumber)