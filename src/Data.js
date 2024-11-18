import menuImage1 from "./assets/Images/menu-1.a0b16a8f9d4b6cca2862.png";
import menuImage2 from "./assets/Images/menu-2.24f3692350f004b8004a.png";
import menuImage3 from "./assets/Images/menu-3.1bedaa57884042844ded.png";
import menuImage4 from "./assets/Images/menu-4.102bafe3a5e4f81cf81d.png";
import menuImage5 from "./assets/Images/menu-5.55373ba7056ffc971050.png";
import menuImage6 from "./assets/Images/menu-6.1e627e81ea9cffd96843.png";
import cartImage1 from "./assets/Images/cart-item-1.e96f24935570ab6ca6f6.png";
import cartImage2 from "./assets/Images/cart-item-2.a126b21895f356e74acd.png";
import cartImage3 from "./assets/Images/cart-item-3.24f3692350f004b8004a.png";
import cartImage4 from "./assets/Images/cart-item-4.55373ba7056ffc971050.png";
import productImage1 from "./assets/Images/product-1.ca74090c36866e811ed8.png";
import productImage2 from "./assets/Images/product-1.ca74090c36866e811ed8.png";
import productImage3 from "./assets/Images/product-3.80abee240885f3eabce3.png";
import blogImage1 from "./assets/Images/blog-1.065d12567fbfbd854b28.jpeg";
import blogImage2 from "./assets/Images/blog-2.aad862135a6f55136148.jpeg";
import blogImage3 from "./assets/Images/blog-3.facb0a62c6f95b805de3.jpeg";
import reviewImage1 from "./assets/Images/pic-1.b105fe43e8bf62808d9f.png";
import reviewImage2 from "./assets/Images/portrait-white-man-isolated.jpg";
import reviewImage3 from "./assets/Images/close-up-happy-laughing-bearded-man-smiling.jpg";


const menu = [
  {
    img: menuImage1,
    name: 'BBQ & Burger',
    currentPrice: 1000,
    originalPrice: 1500
  },
  {
    img: menuImage2,
    name: 'Platter & Cheaps',
    currentPrice: 1900,
    originalPrice: 2500
  },
  {
    img: menuImage3,
    name: 'Karahi Special',
    currentPrice: 1500,
    originalPrice: 2000
  },
  {
    img: menuImage4,
    name: 'Pizza Hut',
    currentPrice: 2500,
    originalPrice: 3000
  },
  {
    img: menuImage5,
    name: 'Fresh Joseph',
    currentPrice: 1000,
    originalPrice: 1500
  },
  {
    img: menuImage6,
    name: 'Tea & Soap',
    currentPrice: 1500,
    originalPrice: 2000
  }
];
const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  }
];
const product = [
  {
    img: productImage1,
    name: 'Special Rice',
    currentPrice: 7000,
    originalPrice: 8500
  },
  {
    img: productImage3,
    name: 'Dum Pukh',
    currentPrice: 10000,
    originalPrice: 12000
  },
  {
    img: productImage2,
    name: 'Sea-Food',
    currentPrice: 6000,
    originalPrice: 7500
  },
];

const blog = [
  {
    img: blogImage1,
    name: 'Specialities',
    currentDate: "By CEO /Aug,2022",
    originalDes: "Dishes like Dum Pukht, Kabuli Pulao, Chapli Kebabs, and Mutton Matka are consistently praised for their authentic taste and high-quality preparation. Dum Pukht, in particular, is a standout dish cooked with traditional methods for maximum flavor"
  },
  {
    img: blogImage2,
    name: 'Ambiances',
    currentDate: "By CEO /Mar,2023",
    originalDes: "The restaurant provides a warm and welcoming environment that complements its traditional menu. It's noted as a great spot for families and gatherings​, While its main branch is on Lethrar Road, Islamabad, you can visit blogs like DND and Home Foodies."
  },
  {
    img: blogImage3,
    name: 'Menu-Variety',
    currentDate: "By CEO /Nov,2024",
    originalDes: " Beyond the specialties, TKR offers a wide range of beverages and desserts, including Mint Margarita, Peshawari Kahwa, and Gajar Halwa, ensuring there's something for every taste​. other branches like in Swabi offer additional options for visitors.l​"
  },
];
const review = [
  {
    img: reviewImage1,
    name: 'Restaurant has received generally positive reviews from customers, particularly for its traditional and authentic flavors rooted in Pakistani cuisine. Located in Islamabad, Restaurant is popular for its signature dishes like Dum Pukht and Kabuli Pulao, which reflect the culinary heritage.',
    nameofreviewer: "Muhammad-Wisal",
  },
  {
    img: reviewImage2,
    name: ' its family-friendly environment and accommodating staff. The restaurant is a go-to spot for dining in, as well as for takeout options If you’re planning to visit, the Islamabad branch on Lehtarar Road is open daily, offering both dine-in and takeaway services​ For more insights or menu details.!',
    nameofreviewer: "Muhammad-Hamdan",
  },
  {
    img: reviewImage3,
    name: 'Khyber Pakhtunkhwa. The Chapli Kebabs and Mutton Matka are also favorites among diners. The restaurant emphasizes quality, authenticity, and excellent service, creating a warm and inviting. Customer feedback highlights the attention to detail in presentation and service. Patrons have',
    nameofreviewer: "Muhammad-Tufail",
  },
];
export { cart, menu, product, blog, review };