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
        bestSeller: true,
        brief:
          "Helps to increase immunity in your body with its natural lavender extracts",
        image: "lavender-immunity-booster.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("t"),
        title: "Energy Booster Tea",
        target: ["Energy Booster"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "energy-booster-tea.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("t"),
        title: "Immunity Supportive Tea",
        target: "Immunity Booster",
        brief: "Helps to increase energy in your body with fruit power",
        image: "immunity-supportive-tea.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("t"),
        title: "Ayurvedic Booster Tea",
        target: ["Energy Booster", "Immunity Booster"],
        brief:
          "Helps to increase immunity in your body with its natural lavender extracts",
        image: "ayurvedic-booster-tea.png",
        pharmaceutical: false,
        bestSeller: true,
        details: {
          benefits: [
            "Natural Immunity Booster",
            "Effective for Cough",
            "Effective for Cold and Flu",
            "Rich in Antioxidants",
            "Energy Enhancer",
            "Improves Digestion",
          ],
          sizes: ["500gm", "300gm"],
          images: [
            {
              src: "ayurvedic-booster-tea.png",
            },
            {
              src: "ayurvedic-booster-tea-2.png",
            },
            {
              src: "nutritional-fact.png",
            },
          ],
          nutrutionalFacts: "nutritional-fact.png",
          deliveryDetails: "",
          additionalDetails:
            "Herbs in tea are scientifically proven for immune supportive and health benefit effects.",
          directionToUse: [
            {
              tile: "Measure Tea",
              description:
                "Take 1-2 teaspoons (5-10 grams) of tea leaves to 500ml water.",
              img: "assets/Direction/measure-tea.png",
            },
            {
              tile: "Boil the tea",
              description:
                "Boil the water for 8-10 minutes to extract the full flavour.",

              img: "assets/Direction/Directionboil-water.png",
            },
            {
              tile: "Strain the tea",
              description: "Filter the tea to remove the leaves.",
              img: "assets/Direction/strain-tea.png",
            },
            {
              tile: "Serve  and sweeten",
              description:
                "Enjoy the tea 1-2 times a day. You can add honey, jaggery or sugar to taste. ",
              img: "assets/Direction/serve-sweeten.png",
            },
            {
              tile: "Special Considerations",
              description:
                "Consult a physician if pregnant or for severely ill individuals.",
              img: "assets/Direction/special-consideration.png",
            },
          ],
          testings: [
            "Microbial Testing",
            "Heavy Metal Testing",
            "Purity Testing",
            "Pesticide Testing",
            "Strength Testing",
          ],
        },
      },
    ].map((product) => ({
      ...product,
      slug: generateSlug(product.title), // Automatically generate slug from title
    })),
  },
  {
    id: generateUniqueId("cat"),
    category: "Syrup",
    slug: "syrup",
    products: [
      {
        id: generateUniqueId("s"),
        title: "Liquid Iron",
        target: ["Joint and Bone Health"],
        brief:
          "Helps to increase immunity in your body with its natural lavender extracts",
        image: "liquid-iron.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("s"),
        title: "Elderberry Syrup",
        target: ["Digestive Health"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "elderberry-syrup.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("s"),
        title: "Elderberry Syrup",
        target: ["Digestive Health"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "elderberry-syrup.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("s"),
        title: "Elderberry Syrup",
        target: ["Digestive Health"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "elderberry-syrup.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("s"),
        title: "Elderberry Syrup",
        target: ["Digestive Health"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "elderberry-syrup.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("s"),
        title: "Elderberry Syrup",
        target: ["Digestive Health"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "elderberry-syrup.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("s"),
        title: "Elderberry Syrup",
        target: ["Digestive Health"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "elderberry-syrup.png",
        pharmaceutical: true,
      },
      {
        id: generateUniqueId("s"),
        title: "Elderberry Syrup",
        target: ["Digestive Health"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "elderberry-syrup.png",
        pharmaceutical: true,
      },
    ].map((product) => ({
      ...product,
      slug: generateSlug(product.title), // Automatically generate slug from title
    })),
  },
];
