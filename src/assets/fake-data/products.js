// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/facemask_1.jpg";
import product_06_image_02 from "../images/facemask_2.jpg";
import product_06_image_03 from "../images/facemask_3.jpg";

const products = [
  {
    id: "01",
    title: "Short T-shirt",
    price: 350,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Fashion",

    desc: "Material Cotton : Lycra T-shirt, Collar shape: round collar T-shirt, Colour: Multicolour T-shirt, Style: casual T-shirt, Model : slim model T-shirt, Quality: Print T-shirt, Perfect: Finishing, Attention: Please For transportation needs, the cloth that you've received will have a fold phenomenon. Please don't worry this fold situation will disappear after the first time you clear or ironing. About color Pictures are only samples for reference. Due to limitations in photography and the inevitable differences in monitor settings, the colors shown in the photograph may not correspond 100% to those in the items themselves. About size All dimensions are measured by hand, there may be 2-3cm deviations. Please ignore the tag size comes with the cloth. The tag size sometimes can be a larger than our description size because those are for Chinese. We are 1 or 2 sizes smaller than European and  African people Choose the larger size if your size between two sizes. Thank you ",

    stores: [
      {
        name: "Amazon",
        price: "325",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "350",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],

  },

  {
    id: "02",
    title: "Samsung Galaxy",
    price: 45000,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Electronics",

    desc: "Samsung Galaxy A72 smartphone features a 6.7-inch FHD+ Super AMOLED Plus- infinity O display, 8GB RAM, 256GB internal memory, 64MP+12MP+8MP+5MP Quad rear camera, 32MP front camera and 5000mAh lithium-ion battery. Order for this Samsung Galaxy A72 smartphone online from Jumia Kenya and have it delivered to your doorstep.",

    stores: [
      {
        name: "Amazon",
        price: "43500",
        fee: "1200",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "45000",
        fee: "1000",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "03",
    title: "Power Banks",
    price: 2500,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Electronics",

    desc: "POHB brand high-quality products-multiple security protection. There is no electricity inside the mobile powe.r supply. Please charge for 12 hours after purchase! Please charge before use. Please charge before use. Please charge before use. Because of long-distance transportation, it is normal for products to arrive in the local area without electricity. Please charge before use!Orders can be delivered to your door, and the whole logistics process can be tracked! Delivery on the same day as the order is placed, and the products will be delivered to you immediately! The platform supports return, please look for the POHB brand when purchasing! 30000 mAh large capacity, which supports you to use more equipment at the same time. Please look for the brand of POHB professional as a large capacity powe.r banks. We make products carefully and meticulously, and the products will be checked before delivery to ensure that the products have no quality problems and delivered to your hands! Please feel free to use it and wish you a happy life! Dual 5V/2.1A I/O multiple USB, support PD,type-c fast charging output, and can charge mobile phones, PADs or other small electronic devices at the same time. The charging speed is increased by more than 92%, and the charging time can be saved by more than 50%.Use intelligent frequency division technology for intelligent charging without damaging your machine.Current required for adaptive equipment.1. technical tips of powe.r pack battery.All the powe.r supply groups use rechargeable batteries based on lithium technology. And lithium ion polymer batteries are most commonly used in powe.r packs. Battery technology is the key to many new developments: everything from mobile phones to electric cars, so it is very likely that some derivatives will become powe.r banks.The two currently used technologies have slightly different properties:Li-ion: Li-ion batteries have higher energy density, that is, they can store more charges in a given size or volume, and the manufacturing cost is lower, but there are still aging problems;Lithium polymer: Lithium polymer powe.r pack will not suffer from the same degree of aging problem, which is a better choice. And it provides you with high-speed charging enjoyment. The disadvantage is that their manufacturing cost is higher, so they may not meet the budget.2. Why did you choose the power banks?Smartphones are loaded with a large number of mobile applications, and fast operation is supported by efficient processors. These high-performance mobile devices consume a lot of energy provided by batteries, so reliable mobile accessories are needed to charge the batteries in order to enjoy various functions available on them.",

    stores: [
      {
        name: "Amazon",
        price: "2700",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "2500",
        fee: "100",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "2500",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "04",
    title: "MacBook Air",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Electronics",

    desc: "Now featuring the Magic Keyboard with a redesigned scissor mechanism, the Space Gray Apple 13.3 MacBook Pro with Retina Display provides a comfortable and accurate typing experience. The 13.3 inches MacBook Pro also features a 13.3 Retina Display, immersive stereo speakers, all-day battery life, and the power of macOS, all in a portable, compact design.",

    stores: [
      {
        name: "Amazon",
        price: "325",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "110",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "05",
    title: "Mens Shirts",
    price: 999,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

    stores: [
      {
        name: "Amazon",
        price: "899",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "999",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },
  {
    id: "06",
    title: "T-shirts",
    price: 350,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Fashion",

    desc: "Material Cotton : Lycra T-shirt, Collar shape: round collar T-shirt, Colour: Multicolour T-shirt, Style: casual T-shirt, Model : slim model T-shirt, Quality: Print T-shirt, Perfect: Finishing, Attention: Please For transportation needs, the cloth that you've received will have a fold phenomenon. Please don't worry this fold situation will disappear after the first time you clear or ironing. About color Pictures are only samples for reference. Due to limitations in photography and the inevitable differences in monitor settings, the colors shown in the photograph may not correspond 100% to those in the items themselves. About size All dimensions are measured by hand, there may be 2-3cm deviations. Please ignore the tag size comes with the cloth. The tag size sometimes can be a larger than our description size because those are for Chinese. We are 1 or 2 sizes smaller than European and  African people Choose the larger size if your size between two sizes. Thank you",

    stores: [
      {
        name: "Amazon",
        price: "325",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "350",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "07",
    title: "Samsung",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Electronics",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

    stores: [
      {
        name: "Amazon",
        price: "125",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "110",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "08",
    title: "Power bank",
    price: 2500,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Electronics",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

    stores: [
      {
        name: "Amazon",
        price: "2500",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "3500",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "09",
    title: "MackBook",
    price: 13000,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Electronics",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

    stores: [
      {
        name: "Amazon",
        price: "13250",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "13000",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "10",
    title: "Fahions shirts",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Fashion",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

    stores: [
      {
        name: "Amazon",
        price: "25",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "50",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "11",
    title: "Beauty facemask",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Beauty",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

    stores: [
      {
        name: "Amazon",
        price: "32",
        fee: "130",
        link: "link"
      },
      {
        name: "Jumia",
        price: "35",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "12",
    title: "Facemask",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Beauty",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

    stores: [
      {
        name: "Amazon",
        price: "35",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "30",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },

  {
    id: "13",
    title: "Charcoal facemask",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Beauty",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",

    stores: [
      {
        name: "Amazon",
        price: "32",
        fee: "130",
        link: "link",
        review: "4.0"
      },
      {
        name: "Jumia",
        price: "30",
        fee: "100",
        link: "link",
        review: "4.0"
      },
    ],
  },
];

export default products;
