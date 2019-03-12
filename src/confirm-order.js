import { LitElement, html } from 'lit-element'
import './my-header'
import './sku-card'
import './input-number'

class confirmOrder extends LitElement {
  static get properties() {
    return {}
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <style>
        .layout {
          border-bottom: 8px solid rgb(242, 238, 238);
          padding: 5px;
          display: flex;
        }
        .layout > .box {
          display: inline-block;
          padding: 5px;
          flex: 1;
        }
        .box-number {
          display: inline-block;
          vertical-align: top;
          text-align: right;
          flex: 1;
        }
        #payment {
          border: 1px solid lightgray;
          border-radius: 4px;
          text-align: center;
          width: 180px;
          height: 30px;
          background: rgb(216, 220, 230);
          font-size: 16px;
        }
      </style>
      <my-header>
        <span slot="title">确认订单</span>
      </my-header>
      <sku-card></sku-card>
      <div class="layout">
        <div class="box">购买吨数:</div>
        <div class="box-number">
          <input-number></input-number>
        </div>
      </div>
      <div class="layout">
        <div class="box">付款方式:</div>
        <div class="box-number">
          <select name="payment" id="payment">
           <option value="1">卸货前付款</option>
           <option value="2">预付款（立减10元）</option>
          </select>
        </div>
      </div>
    `
  }
}
window.customElements.define('confirm-order', confirmOrder)