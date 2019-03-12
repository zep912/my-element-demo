import { LitElement, html } from 'lit-element'
class skuCard extends LitElement {
  static get properties() {
    return {}
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <style>
        .card {
           border-bottom: 8px solid rgb(242, 238, 238); 
           padding: 10px;
           margin-top: 40px;
           display: flex;
        }
        .card-box {
          flex: 1;
          font-size: 20px;
        }
        .orange {
          color: orange;
          font-size: 36px;
          font-weight: 500;
          text-align: right;
        }
        p {
          margin: 0;
          font-size: 12px;
        }
      </style>
      <div class="card">
        <div class="card-box">
          7042 | 广州石化
          <p>报价时间14：22</p>
        </div>
        <div class="card-box orange">￥9980</div>
      </div>
    `
  }
}
window.customElements.define('sku-card', skuCard)