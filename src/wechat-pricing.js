import { LitElement, html } from 'lit-element'
import './my-header'
class WechatPricing extends LitElement {
  static get properties() {
    return {
      prices: { type: Array }
    }
  }

  constructor() {
    super()
    this.prices = [
      {product: '7042', name: '广州石化', num: 30, price: 9870, isRealTime: true, op: "BUY", createPriceAt: Date.now()},
      {product: '7042', name: '广州石化1', num: 30, price: 9830, isRealTime: false, op: "BUY", createPriceAt: Date.now()},
      {product: '7042', name: '广州石化2', num: 30, price: 9850, isRealTime: true, op: "ADVISORY", createPriceAt: Date.now()},
      {product: '7042', name: '广州石化3', num: 30, price: 9860, isRealTime: false, op: "BUY", createPriceAt: Date.now()},
      {product: '7042', name: '广州石化4', num: 30, price: 9870, isRealTime: false, op: "BUY", createPriceAt: Date.now()},
      {product: '7042', name: '广州石化5', num: 30, price: 9870, isRealTime: true, op: "BUY", createPriceAt: Date.now()},
      {product: '550J', name: '山东道恩', num: 30, price: 9880, isRealTime: true, op: "ADVISORY", createPriceAt: Date.now()}
    ]
  }

  handlerClick(op, bindItem) {
    return (e) => {
      console.log(op, bindItem, e)
    }
  }

  render() {
    return html`
      <style>
        .content {
          margin-top: 40px;
        }
        .content > table {
          width: 100%;
          font-size: 14px;
          border-collapse: collapse;
        }
        thead {
          font-size: 14px;
          background: rgb(242, 238, 238);
          text-align: center;
          font-weight: bold;
        }
        .head {
          padding: 8px;
        }
        tbody {
          text-align: center;
        }
        tbody > tr {
          border-bottom: 8px solid rgb(242, 238, 238);
        }
        tbody > tr > td {
          padding: 20px 0px;
        }
        .item-price {
          color: orange;
          font-weight: 700;
        }
        .mark-col {
          position: relative;
        }
        .book-desc {
          position: absolute;
          top: -15px;
          left: 3px;
          width: 20px;
          height: 25px;
          background-color: #e51c23;
          border-radius: 3px;     
          color: #fff;
        }
        .book-desc:after {
          content: '';
          width: 0px;
          height: 0px;
          position: absolute;
          top: 20px;
          left: 0px;
          background-color: #fff;
          border-left: 10px solid #e51c23;
          border-right: 10px solid #e51c23;
          border-bottom: 10px solid transparent;
        }
        .btn {
          border-radius: 4px;
          border: 1px solid rgb(139, 195, 74);
          background: rgb(139, 195, 74);
          padding: 4px 12px;
          color: #fff;
          width: 30px;
        }
        .remark {
          font-size: 12px;
          padding: 8px 2px;
        }
        .coupon {
          height: 100px;
          left: 0px;
          background-color: rgb(139, 195, 74);
          font-size: 14px;
          padding: 0px;
          text-align: center;
          display: flex;
          color: #fff;
        }
        .coupon-title {
          box-sizing: border-box;
          width: 70px;
          padding: 10px 25px;
          border-right: 1px dashed #fff;
          position: relative;
        }
        .coupon-title:after, .coupon-title:before {
          content: '';
          width: 20px;
          height: 20px;
          background-color: #fff;
          position: absolute;
          right: -10px;
          border-radius: 50%;
        }
        .coupon-title:after {
          top: -12px;
        }
        .coupon-title:before {
          bottom: -12px;
        }
        .discount {
           display: flex;
           flex: 1;
        }
        .discount-amount {
          font-size: 100px;
          line-height: 100px;
          padding-left: 40px;
        }
        .discount-unit {
          font-size: 14px;
          line-height: 50px;
        }
        .discount-mark {
          position: relative;
          flex: 1;
        }
        .discount-mark > div {
          position: absolute;
          right: -10px;
          bottom: -10px;
          width: 90px;
          height: 90px;
          font-size: 70px;
          line-height: 100px;
          border: 2px solid rgba(242, 238, 238, 0.4);
          color: rgba(242, 238, 238, 0.4);
          border-radius: 45px;
          text-align: center;
          transform: rotate(330deg);
          opacity: 1;
        }
      </style>
      <!--头部header引入-->
      <my-header>
        <span slot="title">最新报价</span>
      </my-header> 
      <div class="content">
        <table>
          <thead>
            <tr>
              <td class="head"></td>
              <td class="head">产品</td>
              <td class="head">数量(吨)</td>
              <td class="head">单价(元)</td>
              <td class="head"></td>
            </tr>
          </thead>
          <tbody>
            ${this.prices.map(item => 
              html`<tr>
                    <td class="mark-col">
                    ${item.isRealTime?
                      html`<p class="book-desc">实</p>`:html`<p></p>`
                    }
                    </td>
                    <td>${item.product} | ${item.name}</td>
                    <td>${item.num}</td>
                    <td class="item-price">￥${item.price}</td>
                    <td>
                      ${
                        ((i) => {
                          switch (i.op) {
                            case "BUY": return html`<div class="btn" @click="${this.handlerClick(i.op, i)}">购买</div>`;
                            case "ADVISORY": return html`<div class="btn" @click="${this.handlerClick(i.op, i)}">询盘</div>`;
                            default: return html``;
                        }
                      })(item)
                    }
                    </td>
              </tr>
            `)}
          </tbody>
        </table>
        <div class="remark">说明：上述价格为含税送达 + 卸货前付款价格</div>
        <div class="coupon">
          <div class="coupon-title">
            预付款减
          </div>
          <div class="discount">
            <div class="discount-amount">10</div>
            <div class="discount-unit">元/吨</div>
            <div class="discount-mark">
              <div>惠</div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}
window.customElements.define('wechat-pricing', WechatPricing)