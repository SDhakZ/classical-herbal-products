import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faWhatsapp,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { productData } from "./productData";

const uniqueTargets = [
  ...new Set(
    productData.flatMap((category) =>
      category.products.flatMap((product) =>
        Array.isArray(product.target) ? product.target : [product.target]
      )
    )
  ),
];
const bestSellers = productData.flatMap((category) =>
  category.products
    .filter((product) => product.bestSeller)
    .map((product) => ({
      title: product.title,
      url: `/products/${product.slug}`,
    }))
);

export const menuData = [
  {
    title: "PRODUCTS",
    url: "/products",
    links: [],
    dropdown: [
      {
        title: "Featured",
        links: bestSellers,
      },
      {
        title: "Categories",
        links: productData.map((item) => ({
          title: item.category,
          url: `/products?category=${item.slug}`,
        })),
      },
      {
        title: "Targeted Health Products",
        links: uniqueTargets.map((target) => ({
          title: target,
          url: `/products?target=${target.replace(/ /g, "+")}`,
        })),
      },
    ],
  },
  {
    title: "LEARN",
    links: [],
    blogs: [],
    dropdown: [
      {
        title: "Resources",
        links: [
          {
            title: "Blogs",
            url: "/blogs",
          },
          {
            title: "Terms & Conditions",
            url: "/terms-and-conditions",
          },
          {
            title: "Delivery & Return Policies",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "ABOUT",
    links: [],
    blogs: [],
    dropdown: [
      {
        title: "About Us",
        links: [
          {
            title: "Our Journey",
            url: "our-journey",
          },
          {
            title: "Sustainability in Nature",
            url: "sustainability-in-nature",
          },
          {
            title: "Purity, Potency, Integrity",
            url: "purity-potency-integrity",
          },
          {
            title: "Transparency in sourcing",
            url: "transparency-in-sourcing",
          },
        ],
      },
    ],
  },
];

export const socialInfo = [
  {
    icon: faInstagram,
    title: "Instagram",
    link: "https://www.instagram.com/twelveletter.company",
    color: "#E1306C",
  },
  {
    icon: faLinkedinIn,
    title: "Linkedin",
    link: "https://www.linkedin.com/company/79433400/",
    color: "#0a66c2",
  },
  {
    icon: faFacebookF,
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61554349688894",
    color: "#316FF6",
  },
  {
    icon: faWhatsapp,
    title: "Whatsapp",
    link: "https://wa.me/9779840088888",
    color: "#25D366",
  },
  {
    icon: faViber,
    title: "Viber",
    link: "https://invite.viber.com/?g2=AQB3FJ4q%2F%2F0y%2B6%2F%2F%2F%2F%2Fw%2F%2F%2F%2F%2Fw%",
  },
];

export const companyDetails = [
  {
    title: "Contacts",
    items: [
      {
        title: "immuneherb@gmail.com",
        link: "mailto:immuneherb@gmail.com",
        icon: faEnvelope,
      },
      {
        title: "Bhaktapur, Nepal - Lalitpur Nepal - Katmandu Nepal",
        link: "https://maps.app.goo.gl/sj9EsoNrJkjWph3x9",
        icon: faLocationDot,
      },
      {
        nested: [
          {
            title: "(+977) 9808380169",
            link: "phone:+9779808380169",
            icon: faPhone,
          },
          {
            title: "9849648436",
            link: "phone:+9779849648436",
            icon: faPhone,
          },
        ],
      },
    ],
  },
];
