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
        .layout, .address {
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
        .address {
          display: block;
          padding: 10px;
        }
        .address > .box {
          position: relative;
        }
        .mod {
          position: absolute;
          right: 0px;
          top: 0px;
          color: orange;
        }
        .box-center {
          margin-top: 10px;
          background-color: orange;
          width: 100%;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
          text-align: center;
          color: #fff;
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
      <div class="address">
        <div class="box">
          收货人：张三
          <div class="mod">修改</div>
        </div>
        <div class="box">联系电话：1326564562</div>
        <div class="box">收货地址：广东江门蓬江杜阮镇英华路26号三、四层厂房</div>
      </div>
      <div class="address">
        <div class="box">
          商品单价：
          <div class="mod">￥9980*1</div>
        </div>
        <div class="box">
          总计：
          <div class="mod">￥9980</div>
        </div>
        <div class="box-center">
          <div class="btn">提交订单</div>
        </div>
      </div>
    `
  }
}
window.customElements.define('confirm-order', confirmOrder)