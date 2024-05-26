require('dotenv').config();

const Iyzipay = require('iyzipay');
const Payment = require('../models/paymentModel');
const { v4: uuidv4 } = require('uuid');

const iyzipay = new Iyzipay({
  apiKey: process.env.PAYMENT_API_KEY,
  secretKey: process.env.PAYMENT_SECRET_KEY,
  uri: 'https://sandbox-api.iyzipay.com',
});

exports.createPayment = async (req, res) => {
  const { price, paidPrice, paymentCard, buyer } = req.body;

  const conversationId = uuidv4();

  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: conversationId,
    price: price,
    paidPrice: paidPrice,
    currency: Iyzipay.CURRENCY.TRY,
    installment: '1',
    basketId: 'B67832',
    paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    paymentCard: {
      cardHolderName: paymentCard.cardHolderName,
      cardNumber: paymentCard.cardNumber,
      expireMonth: paymentCard.expireMonth,
      expireYear: paymentCard.expireYear,
      cvc: paymentCard.cvc,
      registerCard: paymentCard.registerCard,
    },
    buyer: {
      id: uuidv4(),
      name: buyer.name,
      surname: buyer.surname,
      gsmNumber: '+905350000000',
      email: buyer.email,
      identityNumber: '74300864791',
      lastLoginDate: '2015-10-05 12:43:35',
      registrationDate: '2013-04-21 15:12:09',
      registrationAddress: 'Denizli',
      ip: '85.34.78.112',
      city: 'Denizli',
      country: 'Turkey',
      zipCode: '34732',
    },
    shippingAddress: {
      contactName: 'Vanca',
      city: 'Denizli',
      country: 'Turkey',
      address: 'Denizli',
      zipCode: '34742',
    },
    billingAddress: {
      contactName: 'Vanca',
      city: 'Denizli',
      country: 'Turkey',
      address: 'Denizli',
      zipCode: '34742',
    },
    basketItems: [
      {
        id: uuidv4(),
        name: 'Caravan',
        category1: 'Caravan',
        category2: 'Caravan',
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: price,
      },
    ],
  };

  iyzipay.payment.create(request, async (err, result) => {
    if (err) {
      console.error('Payment creation failed:', err);
      return res.status(500).json({ error: err });
    }

    const newPayment = new Payment({
      conversationId: conversationId,
      price: request.price,
      paidPrice: request.paidPrice,
      currency: request.currency,
      installment: request.installment,
      basketId: request.basketId,
      paymentStatus: result.status,
      paymentCard: request.paymentCard,
      buyer: request.buyer,
    });

    try {
      await newPayment.save();
      res.status(200).json(result);
    } catch (error) {
      console.error('Payment saving failed:', error);
      res.status(500).json({ error: 'Payment could not be saved.' });
    }
  });
};
