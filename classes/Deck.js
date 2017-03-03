import _ from 'lodash'

const filePath = '..Public'

export default class Deck {
  constructor() {
    this.cards = [
      {
        image: require("../components/cards/1.gif"),
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/2.gif"),
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/3.gif"),
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/4.gif"),
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/5.gif"),
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/6.gif"),
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/7.gif"),
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/8.gif"),
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/9.gif"),
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/10.gif"),
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/11.gif"),
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/12.gif"),
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/13.gif"),
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/14.gif"),
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/15.gif"),
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/16.gif"),
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/17.gif"),
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/18.gif"),
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/19.gif"),
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/20.gif"),
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/21.gif"),
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/22.gif"),
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/23.gif"),
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/24.gif"),
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/25.gif"),
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/26.gif"),
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/27.gif"),
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Solid",
        selected: false
      },
      {
        image: require("../components/cards/28.gif"),
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/29.gif"),
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/30.gif"),
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/31.gif"),
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/32.gif"),
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/33.gif"),
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/34.gif"),
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/35.gif"),
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/36.gif"),
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/37.gif"),
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/38.gif"),
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/39.gif"),
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/40.gif"),
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/41.gif"),
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/42.gif"),
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/43.gif"),
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/44.gif"),
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/45.gif"),
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/46.gif"),
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/47.gif"),
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/48.gif"),
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/49.gif"),
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/50.gif"),
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/51.gif"),
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/52.gif"),
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/53.gif"),
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/54.gif"),
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Stripe",
        selected: false
      },
      {
        image: require("../components/cards/55.gif"),
        number: 1,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/56.gif"),
        number: 2,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/57.gif"),
        number: 3,
        color: "Red",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/58.gif"),
        number: 1,
        color: "Purple",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/59.gif"),
        number: 2,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/60.gif"),
        number: 3,
        color:  "Purple",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/61.gif"),
        number: 1,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/62.gif"),
        number: 2,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/63.gif"),
        number: 3,
        color: "Green",
        shape: "Squiggle",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/64.gif"),
        number: 1,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/65.gif"),
        number: 2,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/66.gif"),
        number: 3,
        color: "Red",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/67.gif"),
        number: 1,
        color: "Purple",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/68.gif"),
        number: 2,
        color:  "Purple",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/69.gif"),
        number: 3,
        color:  "Purple",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/70.gif"),
        number: 1,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/71.gif"),
        number: 2,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/72.gif"),
        number: 3,
        color: "Green",
        shape: "Diamond",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/73.gif"),
        number: 1,
        color: "Red",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/74.gif"),
        number: 2,
        color: "Red",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/75.gif"),
        number: 3,
        color: "Red",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/76.gif"),
        number: 1,
        color: "Purple",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/77.gif"),
        number: 2,
        color:  "Purple",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/78.gif"),
        number: 3,
        color:  "Purple",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/79.gif"),
        number: 1,
        color: "Green",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/80.gif"),
        number: 2,
        color: "Green",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      },
      {
        image: require("../components/cards/81.gif"),
        number: 3,
        color: "Green",
        shape: "Oval",
        shading: "Transparent",
        selected: false
      }
    ]
    this.nullCard = {
      image: require("../components/cards/poke.gif"),
      number: null,
      color: "Red",
      shape: "Squiggle",
      shading: "Solid",
      selected: false
    }
  }

}
