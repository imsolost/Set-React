import path from 'path'
import _ from 'lodash'

const filePath = '../Public'

export default class Deck {
  constructor() {
    this.cards = [
      {
        image: "/cards/1.gif",
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/2.gif",
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/3.gif",
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/4.gif",
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/5.gif",
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/6.gif",
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/7.gif",
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/8.gif",
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/9.gif",
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid"
      },
      {
        image: "/cards/10.gif",
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/11.gif",
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/12.gif",
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/13.gif",
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/14.gif",
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/15.gif",
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/16.gif",
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/17.gif",
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/18.gif",
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Solid"
      },
      {
        image: "/cards/19.gif",
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/20.gif",
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/21.gif",
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/22.gif",
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/23.gif",
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/24.gif",
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/25.gif",
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/26.gif",
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/27.gif",
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Solid"
      },
      {
        image: "/cards/28.gif",
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/29.gif",
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/30.gif",
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/31.gif",
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/32.gif",
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/33.gif",
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/34.gif",
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/35.gif",
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/36.gif",
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe"
      },
      {
        image: "/cards/37.gif",
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/38.gif",
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/39.gif",
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/40.gif",
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/41.gif",
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/42.gif",
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/43.gif",
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/44.gif",
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/45.gif",
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe"
      },
      {
        image: "/cards/46.gif",
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/47.gif",
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/48.gif",
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/49.gif",
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/50.gif",
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/51.gif",
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/52.gif",
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/53.gif",
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/54.gif",
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Stripe"
      },
      {
        image: "/cards/55.gif",
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/56.gif",
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/57.gif",
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/58.gif",
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/59.gif",
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/60.gif",
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/61.gif",
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/62.gif",
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/63.gif",
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent"
      },
      {
        image: "/cards/64.gif",
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/65.gif",
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/66.gif",
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/67.gif",
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/68.gif",
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/69.gif",
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/70.gif",
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/71.gif",
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/72.gif",
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent"
      },
      {
        image: "/cards/73.gif",
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Transparent"
      },
      {
        image: "/cards/74.gif",
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Transparent"
      },
      {
        image: "/cards/75.gif",
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Transparent"
      },
      {
        image: "/cards/76.gif",
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Transparent"
      },
      {
        image: "/cards/77.gif",
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Transparent"
      },
      {
        image: "/cards/78.gif",
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Transparent"
      },
      {
        image: "/cards/79.gif",
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Transparent"
      },
      {
        image: "/cards/80.gif",
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Transparent"
      },
      {
        image: "/cards/81.gif",
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Transparent"
      }
    ]
  }

}
