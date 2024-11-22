const express = require('express');
const { addBalance, getWalletBalance } = require('../controller/walletcontroller');
const router = express.Router();

// Route to add balance to the wallet
router.post('/add', addBalance);

// Route to get wallet balance
router.get('/:userName', getWalletBalance);

module.exports = router;