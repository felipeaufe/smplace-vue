export const $store = {
  state: {
    products: { all: [] },
    cart: { all: [] }
  },
  dispatch: jest.fn(),
}

export const internalization = {
  $t: jest.fn(),
  $i18n: { locale: 'en-US' },
}

export const $route = {
  params: {}
}

export const product = {
  "ProductID": 7615,
  "Name": "Watch",
  "Price": 142,
  "Retail Price": 159.95,
  "ThumbnailURL": "https://dummyimage.com/150x150/AAF4EE/000000",
  "PictureURL": "https://dummyimage.com/350x350/AAF4EE/000000",
  "Description": "Vivamus non mollis nibh. Quisque et porttitor ante, at consequat lectus. Donec pulvinar ligula dignissim, laoreet eros nec, mollis libero. Mauris consectetur nibh vel euismod efficitur. Donec molestie egestas ipsum quis venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent justo turpis, ultrices eget odio sed, ultricies imperdiet augue. Integer sit amet varius magna.",
  "Category": "Wearables",
  "CategoryID": 5,
  "Brand": "Entity Apparel",
  "Color": "Rosewood|Thyme Green|Dark Charcoal",
  "Badges": "Exclusive|Clearance",
  "RatingAvg": 4.5,
  "RatingCount": 10,
  "Stock": 8,
  "DateCreated": "2018-03-20 22:24:21"
};