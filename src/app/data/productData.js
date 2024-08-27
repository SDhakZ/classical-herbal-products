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
              src: "lavender-immunity-booster.png",
            },
            {
              src: "ayurvedic-booster-tea-2.png",
            },
            {
              src: "nutritional-fact.png",
            },
          ],
          testing: {
            image: "lavender-immunity-booster.png",
            types: [
              "Microbial Testing",
              "Heavy Metal Testing",
              "Purity Testing",
              "Pesticide Testing",
              "Strength Testing",
            ],
          },
          nutrutionalFacts: "nutritional-fact.png",
          deliveryDetails: "",
          additionalDetails:
            "Herbs in tea are scientifically proven for immune supportive and health benefit effects. You can take the tea whenever you want to relax and take back.",
          directionToUse: [
            {
              title: "Measure Tea",
              description:
                "Take 1-2 teaspoons (5-10 grams) of tea leaves to 500ml water.",
              icon: "measure-the-tea.png",
            },
            {
              title: "Boil the tea",
              description:
                "Boil the water for 8-10 minutes to extract the full flavour.",

              icon: "boil-the-tea.png",
            },
            {
              title: "Strain the tea",
              description: "Filter the tea to remove the leaves.",
              icon: "strain-the-tea.png",
            },
            {
              title: "Serve  and sweeten",
              description:
                "Enjoy the tea 1-2 times a day. You can add honey, jaggery or sugar to taste. ",
              icon: "serve-and-sweeten.png",
            },
            {
              title: "Special Considerations",
              specialCondition: true,
              description:
                "Consult a physician if pregnant or for severely ill individuals.",
              icon: "special-consideration.png",
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
      {
        id: generateUniqueId("t"),
        title: "Energy Booster Tea",
        target: ["Energy Booster"],
        brief: "Helps to increase energy in your body with fruit power",
        image: "energy-booster-tea.png",
        pharmaceutical: true,
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
              src: "energy-booster-tea.png",
            },
            {
              src: "ayurvedic-booster-tea-2.png",
            },
            {
              src: "nutritional-fact.png",
            },
          ],
          testing: {
            image: "energy-booster-tea.png",
            types: [
              "Microbial Testing",
              "Heavy Metal Testing",
              "Purity Testing",
              "Pesticide Testing",
              "Strength Testing",
            ],
          },
          nutrutionalFacts: "nutritional-fact.png",
          deliveryDetails: "",
          additionalDetails:
            "Herbs in tea are scientifically proven for immune supportive and health benefit effects. You can take the tea whenever you want to relax and take back.",
          directionToUse: [
            {
              title: "Measure Tea",
              description:
                "Take 1-2 teaspoons (5-10 grams) of tea leaves to 500ml water.",
              icon: "measure-the-tea.png",
            },
            {
              title: "Boil the tea",
              description:
                "Boil the water for 8-10 minutes to extract the full flavour.",

              icon: "boil-the-tea.png",
            },
            {
              title: "Strain the tea",
              description: "Filter the tea to remove the leaves.",
              icon: "strain-the-tea.png",
            },
            {
              title: "Serve  and sweeten",
              description:
                "Enjoy the tea 1-2 times a day. You can add honey, jaggery or sugar to taste. ",
              icon: "serve-and-sweeten.png",
            },
            {
              title: "Special Considerations",
              specialCondition: true,
              description:
                "Consult a physician if pregnant or for severely ill individuals.",
              icon: "special-consideration.png",
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
      {
        id: generateUniqueId("t"),
        title: "Immunity Supportive Tea",
        target: "Immunity Booster",
        brief: "Helps to increase energy in your body with fruit power",
        image: "immunity-supportive-tea.png",
        pharmaceutical: true,
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
              src: "immunity-supportive-tea.png",
            },
            {
              src: "ayurvedic-booster-tea-2.png",
            },
            {
              src: "nutritional-fact.png",
            },
          ],
          testing: {
            image: "immunity-supportive-tea.png",
            types: [
              "Microbial Testing",
              "Heavy Metal Testing",
              "Purity Testing",
              "Pesticide Testing",
              "Strength Testing",
            ],
          },
          nutrutionalFacts: "nutritional-fact.png",
          deliveryDetails: "",
          additionalDetails:
            "Herbs in tea are scientifically proven for immune supportive and health benefit effects. You can take the tea whenever you want to relax and take back.",
          directionToUse: [
            {
              title: "Measure Tea",
              description:
                "Take 1-2 teaspoons (5-10 grams) of tea leaves to 500ml water.",
              icon: "measure-the-tea.png",
            },
            {
              title: "Boil the tea",
              description:
                "Boil the water for 8-10 minutes to extract the full flavour.",

              icon: "boil-the-tea.png",
            },
            {
              title: "Strain the tea",
              description: "Filter the tea to remove the leaves.",
              icon: "strain-the-tea.png",
            },
            {
              title: "Serve  and sweeten",
              description:
                "Enjoy the tea 1-2 times a day. You can add honey, jaggery or sugar to taste. ",
              icon: "serve-and-sweeten.png",
            },
            {
              title: "Special Considerations",
              specialCondition: true,
              description:
                "Consult a physician if pregnant or for severely ill individuals.",
              icon: "special-consideration.png",
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
      {
        id: generateUniqueId("t"),
        title: "Ayurvedic Booster Tea",
        target: ["Energy Booster", "Immunity Booster"],
        brief:
          "Helps to increase immunity in your body with its natural lavender extracts",
        image: "ayurvedic-booster-tea.png",
        pharmaceutical: false,
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
          testing: {
            image: "ayurvedic-booster-tea.png",
            types: [
              "Microbial Testing",
              "Heavy Metal Testing",
              "Purity Testing",
              "Pesticide Testing",
              "Strength Testing",
            ],
          },
          nutrutionalFacts: "nutritional-fact.png",
          deliveryDetails: "",
          additionalDetails:
            "Herbs in tea are scientifically proven for immune supportive and health benefit effects. You can take the tea whenever you want to relax and take back.",
          directionToUse: [
            {
              title: "Measure Tea",
              description:
                "Take 1-2 teaspoons (5-10 grams) of tea leaves to 500ml water.",
              icon: "measure-the-tea.png",
            },
            {
              title: "Boil the tea",
              description:
                "Boil the water for 8-10 minutes to extract the full flavour.",

              icon: "boil-the-tea.png",
            },
            {
              title: "Strain the tea",
              description: "Filter the tea to remove the leaves.",
              icon: "strain-the-tea.png",
            },
            {
              title: "Serve  and sweeten",
              description:
                "Enjoy the tea 1-2 times a day. You can add honey, jaggery or sugar to taste. ",
              icon: "serve-and-sweeten.png",
            },
            {
              title: "Special Considerations",
              specialCondition: true,
              description:
                "Consult a physician if pregnant or for severely ill individuals.",
              icon: "special-consideration.png",
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
