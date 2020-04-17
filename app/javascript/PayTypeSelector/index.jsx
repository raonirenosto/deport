import React from 'react'

import NoPayType            from "./NoPayType";
import CreditCardPayType    from "./CreditCardPayType";
import CheckPayType         from "./CheckPayType";
import PurchaseOrderPayType from "./PurchaseOrderPayType"

class PayTypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onPayTypeSelected = this.onPayTypeSelected.bind(this)
    this.state = { seletectedPayType: null };
  }

  render() {
    let PayTypeCustomComponent = NoPayType;
    if (this.state.seletectedPayType == "Credit card") {
      PayTypeCustomComponent = CreditCardPayType;
    } else if (this.state.seletectedPayType == "Check") {
      PayTypeCustomComponent = CheckPayType;
    } else if (this.state.seletectedPayType == "Purchase order") {
      PayTypeCustomComponent = PurchaseOrderPayType;
    }
    return (
      <div>
        <div className="field">
          <label htmlFor="order_pay_type">Pay type</label>
          <select onChange={this.onPayTypeSelected} id="pay_type" name="order[pay_type]">
            <option value="">Select a payment method</option>
            <option value="Check">Check</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Purchase order">Purchase order</option>
          </select>
        </div>
        <PayTypeCustomComponent />
      </div>
    );
  }

  onPayTypeSelected(event) {
    this.setState({ seletectedPayType: event.target.value })
  }
}
export default PayTypeSelector
