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
  const [availablePharmaceuticalTypes, setAvailablePharmaceuticalTypes] =
    useState(["Pharmaceutical", "Non-Pharmaceutical"]);

  const updateAvailableTargetsAndPharmaceuticals = (category) => {
    if (category) {
      const categoryProducts =
        productData.find((item) => item.slug === category)?.products || [];

      // Update available targets
      const newTargets = categoryProducts.reduce((acc, product) => {
        const targets = Array.isArray(product.target)
          ? product.target
          : [product.target];
        targets.forEach((target) => {
          if (!acc.includes(target)) acc.push(target);
        });
        return acc;
      }, []);
      setAvailableTargets(newTargets);

      // Update available pharmaceutical types
      const pharmaceuticalTypes = new Set();
      categoryProducts.forEach((product) => {
        if (product.pharmaceutical) {
          pharmaceuticalTypes.add("Pharmaceutical");
        } else {
          pharmaceuticalTypes.add("Non-Pharmaceutical");
        }
      });
      setAvailablePharmaceuticalTypes([...pharmaceuticalTypes]);
    } else {
      // Reset to all targets and pharmaceutical types when no category is selected
      const allTargets = productData.flatMap((data) =>
        data.products.flatMap((product) =>
          Array.isArray(product.target) ? product.target : [product.target]
        )
      );
      setAvailableTargets([...new Set(allTargets)]);

      // Reset pharmaceutical types
      setAvailablePharmaceuticalTypes(["Pharmaceutical", "Non-Pharmaceutical"]);
    }
  };

  const handleFilterChange = (filterType, value, explicitlyAdding = null) => {
    setFilters((prev) => {
      if (filterType === "targets") {
        const updatedTargets = new Set(prev.targets);
        if (explicitlyAdding === null) {
          // Toggle existing state if not explicitly specified
          if (updatedTargets.has(value)) {
            updatedTargets.delete(value); // Remove the target if it's already selected
          } else {
            updatedTargets.add(value); // Add the target if it's not selected
          }
        } else {
          // Add or remove based on the explicitlyAdding flag
          if (explicitlyAdding) {
            updatedTargets.add(value);
          } else {
            updatedTargets.delete(value);
          }
        }
        return {
          ...prev,
          targets: [...updatedTargets], // Convert Set back to array
        };
      }

      // For other filters like category or sort
      const updatedFilters = {
        ...prev,
        [filterType]: value,
      };

      // Update dependent filters like targets and pharmaceuticals if category changes
      if (filterType === "category") {
        updateAvailableTargetsAndPharmaceuticals(value);
      }

      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      sort: "Relevance",
      category: null,
      targets: [],
      pharmaceutical: null,
    });
    setAvailableTargets(targetNames);
    setAvailablePharmaceuticalTypes(["Pharmaceutical", "Non-Pharmaceutical"]);
  };

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

    // Move sorting logic inside useMemo
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
  }, [filters]);

  return {
    filters,
    availableTargets,
    availablePharmaceuticalTypes, // Return the available pharmaceutical types
    filteredProducts,
    handleFilterChange,
    updateAvailableTargetsAndPharmaceuticals,
    clearFilters,
  };
};
