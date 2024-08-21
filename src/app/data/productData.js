import { generateSlug } from "@/app/utility/GenerateSlug";
import { generateUniqueId } from "@/app/utility/GenerateUniqueId";

export const productData = [
  {
    id: generateUniqueId("cat"), // Generate unique ID for category
    category: "Tea",
    slug: "tea",
    products: [
      {
        id: generateUniqueId("t"), // Generate unique ID for product
        title: "Lavender Immunity Booster",
        target: ["Immunity Booster"],
        brief:
          "Helps to increase immunity in your body with its natural lavender extracts",
        image: "tea.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("t"),
        title: "Energy booster tea",
        target: ["Energy Booster"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "tea.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("t"),
        title: "Immunity Supportive Tea",
        target: "Immunity Booster",
        brief: "Helps to increase energy in your body with fruit power",
        image: "tea.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("t"),
        title: "Ayurvedic Booster",
        target: ["Energy Booster", "Immunity Booster"],
        brief:
          "Helps to increase immunity in your body with its natural lavender extracts",
        image: "tea.png",
        pharmaceutical: true,
      },
    ].map((product) => ({
      ...product,
      slug: generateSlug(product.title), // Automatically generate slug from title
    })),
  },
  {
    id: generateUniqueId("cat"),
    category: "Syrups",
    slug: "syrups",
    products: [
      {
        id: generateUniqueId("s"),
        title: "Liquid Iron",
        target: ["Joint and Bone Health"],
        brief:
          "Helps to increase immunity in your body with its natural lavender extracts",
        image: "tea.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("s"),
        title: "Elderberry Syrup",
        target: ["Digestive Health"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "tea.png",
        pharmaceutical: true,
      },
    ].map((product) => ({
      ...product,
      slug: generateSlug(product.title), // Automatically generate slug from title
    })),
  },
];
