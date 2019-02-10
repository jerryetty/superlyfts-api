var paths = {
  trip: { name: 'Trip', endpoint: '/trip' },
  car: { name: 'Car', endpoint: '/car' },
  user: { name: 'User', endpoint: '/user' },
  driver: { name: 'Driver', endpoint: '/driver' },
  wallet: { name: 'Wallet', endpoint: '/user/:user_id/wallettrip' }
}

module.exports = {
  index: function (req, res, next) {
    res.render('index', { title: 'Superlyfts API', data: paths })
  }
}
