var express = require('express')
var app = express()
var cors = require('cors')
const PORT = 9000

// for security setting if the API are running in different server from our server
app.use(cors())

app.get('/api/items', (req, res) => {
  const data = {
    items: [{
      id: 1,
      name: 'shoes',
      price: 10,
      imgUrl: 'https://s3.amazonaws.com/shop-king/images/rsz_shoes.jpg'
    }, {
      id: 2,
      name: 'watch',
      price: 50,
      imgUrl: 'https://s3.amazonaws.com/shop-king/images/rsz_watch.jpg'
    }, {
      id: 3,
      name: 'shirt',
      price: 25,
      imgUrl: 'https://s3.amazonaws.com/shop-king/images/rsz_shirt.jpg'
    }, {
      id: 4,
      name: 'bag',
      price: 20,
      imgUrl: 'https://s3.amazonaws.com/shop-king/images/rsz_bag.jpg'
    }, {
      id: 5,
      name: 'jacket',
      price: 35,
      imgUrl: 'https://s3.amazonaws.com/shop-king/images/rsz_jacket.jpg'
    }, {
      id: 6,
      name: 'cap',
      price: 10,
      imgUrl: 'https://s3.amazonaws.com/shop-king/images/rsz_cap.jpg'
    }]
  }

  res.json(data)
})

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);

})
