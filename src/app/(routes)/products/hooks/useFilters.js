import { useState, useMemo } from "react";
import { productData } from "@/app/data/productData";
import { generateSlug } from "@/app/utility/GenerateSlug";
import { groupProductsByTarget } from "@/app/utility/GroupProductsByTarget";

export const useFilters = () => {
  const targetNames = Object.keys(groupProductsByTarget());
  const [filters, setFilters] = useState({
    sort: "Relevance",
    category: null,
    targets: [], // Ensure this is an array by default
    pharmaceutical: null,
  });
  const [availableTargets, setAvailableTargets] = useState(targetNames);

  const updateAvailableTargets = (category) => {
    if (category) {
      const categoryProducts =
        productData.find((item) => item.slug === category)?.products || [];
      const newTargets = categoryProducts.reduce((acc, product) => {
        const targets = Array.isArray(product.target)
          ? product.target
          : [product.target]; // Ensure product.target is treated as an array
        targets.forEach((target) => {
          if (!acc.includes(target)) acc.push(target);
        });
        return acc;
      }, []);
      setAvailableTargets(newTargets);
    } else {
      // Reset to all targets when no category is selected
      const allTargets = productData.flatMap((data) =>
        data.products.flatMap((product) =>
          Array.isArray(product.target) ? product.target : [product.target]
        )
      );
      setAvailableTargets([...new Set(allTargets)]);
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === "targets") {
        // Use Set to ensure unique targets
        const updatedTargets = new Set(prev.targets);
        if (updatedTargets.has(value)) {
          updatedTargets.delete(value); // Remove the target if it's already selected
        } else {
          updatedTargets.add(value); // Add the target if it's not selected
        }
        return {
          ...prev,
          targets: [...updatedTargets], // Convert Set back to array
        };
      }

      const updatedFilters = {
        ...prev,
        [filterType]: value,
      };

      if (filterType === "category") {
        updateAvailableTargets(value); // Update targets when category changes
      }

      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      sort: "Relevance",
      category: null,
      targets: [], // Ensure it resets to an empty array
      pharmaceutical: null,
    });
    setAvailableTargets(targetNames);
  };

  const sortProducts = (products) => {
    switch (filters.sort) {
      case "Alpha A-Z":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "Alpha Z-A":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case "Best Sellers":
        return products.filter((product) => product.bestSeller);
      default:
        return products;
    }
  };

  // Filter the products based on the filters before applying pagination
  const filteredProducts = useMemo(() => {
    const products = productData.flatMap((category) =>
      category.products
        .filter(
          (product) =>
            (!filters.category || category.slug === filters.category) &&
            (filters.targets.length === 0 ||
              (Array.isArray(product.target)
                ? product.target.some((t) => filters.targets.includes(t))
                : filters.targets.includes(product.target))) &&
            (filters.pharmaceutical === null ||
              (filters.pharmaceutical === "Pharmaceutical" &&
                product.pharmaceutical) ||
              (filters.pharmaceutical === "Non-Pharmaceutical" &&
                !product.pharmaceutical))
        )
        .map((product) => ({
          ...product,
          slug: generateSlug(product.title),
          categorySlug: category.slug,
        }))
    );

    return sortProducts(products);
  }, [filters]);

  return {
    filters,
    availableTargets,
    filteredProducts, // This should be the complete filtered list, not paginated
    handleFilterChange,
    updateAvailableTargets,
    clearFilters,
  };
};
