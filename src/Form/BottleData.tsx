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
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/grey-goose.jpg",
      },
      {
        name: "Absolut",
        price: "£130",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/absolut.jpg",
      },
      {
        name: "Belvedere",
        price: "£150",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/belvedere.jpg",
      },
      {
        name: "Smirnoff",
        price: "£135",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/vodka-smirnoff-red-no21-alcool-40-07l-5410316519724_1_1000x1000-1.webp",
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
        price: "£250",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/bombay-sapphire.jpg",
      },
      {
        name: "Hendrick's",
        price: "£240",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/hendricks.jpg",
      },
      {
        name: "Beefeater",
        price: "£200",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/beefeater.jpg",
      },
      {
        name: "Gordon's",
        price: "£150",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/gordons.jpg",
      },
    ],
  },
  {
    type: "Tequila",
    bottles: [
      {
        name: "Patron",
        price: "£245",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/patron-silver.jpg",
      },
      {
        name: "Don Julio",
        price: "£250",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/don-julio.jpg",
      },
      {
        name: "Herradura",
        price: "£255",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/herradura.jpg",
      },
      {
        name: "El Jimador",
        price: "£250",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/el-jimador.jpg",
      },
    ],
  },
  {
    type: "Champagne",
    bottles: [
      {
        name: "Moet & Chandon",
        price: "£360",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/moet-chandon.jpg",
      },
      {
        name: "Veuve Clicquot",
        price: "£270",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/veuve-clicquot.jpg",
      },
      {
        name: "Dom Perignon",
        price: "£400",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/dom-perignon.jpg",
      },

      {
        name: "Louis Roederer ",
        price: "£300",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/louis-roederer-1.jpg",
      },
    ],
  },
  {
    type: "Packages",
    bottles: [
      {
        name: "Package 1",
        price: "£350",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/image-coming-soon-placeholder.png",
      },
      {
        name: "Package 2",
        price: "£500",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/image-coming-soon-placeholder.png",
      },
      {
        name: "Package 3",
        price: "£1500",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/image-coming-soon-placeholder.png",
      },
      {
        name: "Package 4",
        price: "£5000",
        quantity: 0,
        imageUrl:
          "https://demo.mckenzie-james.com/wp-content/uploads/2024/01/image-coming-soon-placeholder.png",
      },
    ],
  },
];
