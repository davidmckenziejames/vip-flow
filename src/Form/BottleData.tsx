export type Bottle = {
  name: string;
  price: string;
  quantity: number;

  imageUrl: string;
};

export type BottleType = {
  type: string;
  bottles: Bottle[];
};

// Data for different types of bottles
export const bottleData: BottleType[] = [
  {
    type: "Vodka",
    bottles: [
      {
        name: "Grey Goose",
        price: "£100",
        quantity: 0,
        imageUrl: "src/assets/bottles/grey-goose.webp",
      },
      {
        name: "Absolut",
        price: "£130",
        quantity: 0,
        imageUrl: "src/assets/bottles/absolut.webp",
      },
      {
        name: "Belvedere",
        price: "£150",
        quantity: 0,
        imageUrl: "src/assets/bottles/belvedere.jpg",
      },
      {
        name: "Ciroc",
        price: "£135",
        quantity: 0,
        imageUrl: "src/assets/bottles/ciroc-vodka.jpg",
      },
    ],
  },
  {
    type: "Whiskey",
    bottles: [
      {
        name: "Monkey Shoulder",
        price: "£300",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/monkey-shoulder.jpg",
      },
      {
        name: "Macallan Gold",
        price: "£360",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/macallan-gold.jpg",
      },
      {
        name: "Johnnie Walker",
        price: "£300",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/johnnie-walker-blue.jpg",
      },
      {
        name: "Glenfiddich 12yr",
        price: "£300",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/glenfiddich-12.jpg",
      },
    ],
  },
  {
    type: "Gin",
    bottles: [
      {
        name: "Bombay Sapphire",
        price: "£25",
        quantity: 0,
        imageUrl: "src/assets/bottles/bombay-sapphire.webp",
      },
      {
        name: "Hendrick's",
        price: "£40",
        quantity: 0,
        imageUrl: "src/assets/bottles/hendricks.webp",
      },
      {
        name: "Beefeater",
        price: "£20",
        quantity: 0,
        imageUrl: "src/assets/bottles/beefeater.webp",
      },
      {
        name: "Gordon's",
        price: "£15",
        quantity: 0,
        imageUrl: "src/assets/bottles/gordons.jpg",
      },
    ],
  },
  {
    type: "Tequila",
    bottles: [
      {
        name: "Patron",
        price: "£45",
        quantity: 0,
        imageUrl: "src/assets/bottles/patron_silver.jpg",
      },
      {
        name: "Don Julio",
        price: "£50",
        quantity: 0,
        imageUrl: "src/assets/bottles/don-julio.jpg",
      },
      {
        name: "Herradura",
        price: "£55",
        quantity: 0,
        imageUrl: "src/assets/bottles/herradura.jpg",
      },
      {
        name: "El Jimador",
        price: "£35",
        quantity: 0,
        imageUrl: "src/assets/bottles/eljimador.jpg",
      },
    ],
  },
  {
    type: "Champagne",
    bottles: [
      {
        name: "Moet & Chandon",
        price: "£50",
        quantity: 0,
        imageUrl: "src/assets/bottles/mc.jpg",
      },
      {
        name: "Veuve Clicquot",
        price: "£70",
        quantity: 0,
        imageUrl: "src/assets/bottles/v-c.jpg",
      },
      {
        name: "Dom Perignon",
        price: "£200",
        quantity: 0,
        imageUrl: "src/assets/bottles/dom-perignon.jpg",
      },

      {
        name: "Louis Roederer ",
        price: "£300",
        quantity: 0,
        imageUrl: "src/assets/bottles/louis-roe.webp",
      },
    ],
  },
  {
    type: "Packages",
    bottles: [
      {
        name: "Moet & Chandon",
        price: "£50",
        quantity: 0,
        imageUrl: "src/assets/bottles/mc.jpg",
      },
      {
        name: "Veuve Clicquot",
        price: "£70",
        quantity: 0,
        imageUrl: "src/assets/bottles/v-c.jpg",
      },
      {
        name: "Dom Perignon",
        price: "£200",
        quantity: 0,
        imageUrl: "src/assets/bottles/dom-perignon.jpg",
      },

      {
        name: "Louis Roederer ",
        price: "£300",
        quantity: 0,
        imageUrl: "src/assets/bottles/louis-roe.webp",
      },
    ],
  },
];
