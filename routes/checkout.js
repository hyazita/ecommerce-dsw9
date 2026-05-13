const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/checkoutController');

router.get( '/',                    ctrl.getCheckoutPage);
router.post('/process',             ctrl.processCheckout);
router.post('/create-paypal-order', ctrl.createPayPalOrder);
router.post('/capture-paypal-order',ctrl.capturePayPalOrder);

router.get('/success', (req, res) => res.render('order-success', {
  title:   'Pedido Completado',
  message: 'Tu pago fue procesado exitosamente. ¡Gracias por tu compra!',
  order:   { id: req.query.orderId }
}));

router.get('/cancel', ctrl.handleCancelPayment);

module.exports = router;