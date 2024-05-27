const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    conversationId: { type: String, required: true },
    price: { type: Number, required: true },
    paidPrice: { type: Number, required: true },
    currency: { type: String, required: true, default: 'TRY' },
    installment: { type: Number, required: true, default: 1 },
    basketId: { type: String, required: true, default: 'B67832' },
    paymentStatus: { type: String, default: 'pending' },
    paymentCard: {
      cardHolderName: { type: String, required: true },
      cardNumber: { type: String, required: true },
      expireMonth: { type: String, required: true },
      expireYear: { type: String, required: true },
      cvc: { type: String, required: true },
      registerCard: { type: String, required: true, default: '0' },
    },
    buyer: {
      name: { type: String, required: true },
      surname: { type: String, required: true },
      email: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
