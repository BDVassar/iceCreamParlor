const merchandise = [{
  name: 'Vanilla',
  price: 1,
  quantity: 0,
  Type: 'Ice Cream'
}, {
  name: 'Chocolate',
  price: 1.50,
  quantity: 0,
  Type: 'Ice Cream'
}, {
  name: 'Strawberry',
  price: 1.25,
  quantity: 0,
  Type: 'Ice Cream'
}, {
  name: 'Cookie Dough',
  price: 1.75,
  quantity: 0,
  Type: 'Ice Cream'
}, {
  name: 'Rockyroad',
  price: 2,
  quantity: 0,
  Type: 'Ice Cream',
}, {
  name: 'Bowl',
  price: 1,
  quantity: 0,
  Type: 'Container'
}, {
  name: 'Cone',
  price: 1,
  quantity: 0,
  Type: 'Container'
}, {
  name: 'Waffle Cone',
  price: 1.50,
  quantity: 0,
  Type: 'Container'
}, {
  name: 'Waffle Bowl',
  price: 2,
  quantity: 0,
  Type: 'Container'
}, {
  name: 'sprinkles',
  price: .75,
  quantity: 0,
  Type: 'Topping'
}, {
  name: 'Cheese Cake Bites',
  price: 1.50,
  quantity: 0,
  Type: 'Topping'
}, {
  name: 'Chocolate Chips',
  price: 1,
  quantity: 0,
  Type: 'Topping'
}
]

function buyItem(item) {

  let thing = merchandise.find(thing => thing.name == item)
  thing.quantity++

  drawCart()
}

function drawCart() {
  let cartItem = ''
  merchandise.forEach(item => {
    if (item.quantity > 0) {
      cartItem +=
        `<section class="row tx-cyber">
        <div class="col-6">'${item.name}'</div>
        <div class="col-2">'${item.quantity}'</div>
        <div class="col-2">'${item.price}'</div>
        <div class="col-2">'${item.quantity * item.price}'</div>
      </section>`
    }
    // @ts-ignore
    document.getElementById('cart').innerHTML = cartItem
    drawTotal()
  })
}

function drawTotal() {
  //find all quantities that are > 0
  //multiply those by price
  let total = 0
  merchandise.forEach(merch => {
    total += merch.quantity * merch.price
    document.getElementById('total').innerText = total.toFixed(2)
  })
}

function checkOut() {
  //find all quantities that are > 0
  //change quantities to  0
  //draw cart()
  if (window.confirm('Will that be all for you?')) {
    merchandise.forEach(merch => merch.quantity = 0)
    drawCart()
  }
}

drawCart()