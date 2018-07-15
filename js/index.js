//first create prototype or class of generated componenets
//second is create an object with keys and values
//find way to take input and generate it allow user to add item

function Shoes() {
  this.shoes = [
    {
      name: "Air Force 1 White",
      img: "https://stockx.imgix.net/Nike-Air-Force-1-Low-All-Star-2018-White.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=90",
      price: "$90"
    },
    {
      name: "Air Force Grape",
      img: "https://i.pinimg.com/originals/2a/fb/a5/2afba5265954d7c8db397d29dc54976d.jpg",
      price: "$190"
    },
    {
      name: "Air Force 1 '07 LV8",
      img: "https://thumbor-titelmediaug.netdna-ssl.com/kM5FpZagn4l4blbEBo7zsXl5KaY=/1200x800/filters:strip_icc()/http%3A%2F%2Fwhatdropsnow.s3.amazonaws.com%2Fproduct_images%2Fimages%2F114173%2F48e03880cf4e093c0203750f18e6365166acdb05.jpg",
      price: "$100"
    },
    {
      name: "Air Force 1 '07 Black & White",
      img: "https://thumbor-titelmediaug.netdna-ssl.com/DoEcXa8IOh4n9ioqkKvSXyU8I54=/1200x800/filters:strip_icc()/http%3A%2F%2Fwhatdropsnow.s3.amazonaws.com%2Fproduct_images%2Fimages%2F119270%2F49aaac7b151ed436626d59b258a57ec5dc922799.jpg",
      price: "$90"
    },
    {
      name: "Air Force 1 '07 Patent",
      img: "https://thumbor-titelmediaug.netdna-ssl.com/Iw6xH1X68uSqGjiMna1uuk1yDys=/1200x800/filters:strip_icc()/http%3A%2F%2Fwhatdropsnow.s3.amazonaws.com%2Fproduct_images%2Fimages%2F119274%2F711a7e723ef8b586aa6c83214ef85b6a04ec81f5.jpg", 
      price: "$100"
    },
    {
      name: "SF AF-1 Hi",
      img: "https://thumbor-titelmediaug.netdna-ssl.com/SuDYJ5Y2-VfxgD3Uhx6ybSB58bc=/1200x800/filters:strip_icc()/http%3A%2F%2Fwhatdropsnow.s3.amazonaws.com%2Fproduct_images%2Fimages%2F118109%2Fd58501fda1121d787dce0be8e2cbe5a8f9eb2b4c.jpg",
      price: "$180"
    }
  ]
}

Shoes.prototype.renderShoes = function() {
  for(i = 0; i < this.shoes.length; i++) {
    var newDiv = document.createElement('div')
    var newH2 = document.createElement('h2')
    var newImg = document.createElement('img')
    var newH5 = document.createElement('h5')
    newH2.textContext = this.shoes[i].name
    newImg.src = this.shoes[i].img
    newH5.textContext = this.shoes[i].price
    newDiv.appendChild(newH2)
    newDiv.appendChild(newImg)
    newDiv.appendChild(newH5)
    document.body.appendChild(newDiv)
  }
}

var nike = new Shoes()

nike.renderShoes()















