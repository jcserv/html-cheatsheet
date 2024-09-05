import React, { useEffect, useState } from "react";
import { Category } from "../data/htmlCategories";

interface CategoryListProps {
  categories: Category[];
  searchQuery: string;
  expandAll: boolean;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  searchQuery,
  expandAll,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (expandAll) {
        setExpandedCategories(categories.map((category) => category.name));
    } else {
        setExpandedCategories([]);
    }
  }, [categories, expandAll])

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const isExpanded = (categoryName: string) => expandedCategories.includes(categoryName);

  const matchesSearch = (category: Category) =>
    category.name.toLowerCase().includes(searchQuery) ||
    category.elements.some(
      (element) =>
        element.name.toLowerCase().includes(searchQuery) ||
        element.description.toLowerCase().includes(searchQuery)
    );

  return (
    <div className="category-list-container">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`category ${matchesSearch(category) ? "" : "hidden"}`}
        >
          <h2 onClick={() => toggleCategory(category.name)}>
            {category.name} {isExpanded(category.name) ? "▼" : "▶"}
          </h2>
          {isExpanded(category.name) && (
            <ul>
              {category.elements.map((element) => (
                <li
                  key={element.name}
                  className={
                    element.name.toLowerCase().includes(searchQuery) ||
                    element.description.toLowerCase().includes(searchQuery)
                      ? ""
                      : "hidden"
                  }
                >
                  <div style={{ textAlign: "left" }}>
                    <span>
                      <strong>{element.name}</strong>: {element.description}
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <span style={{ textAlign: "left", width: "50%" }}>
                      <pre className="code-block">
                        Code: <code>{`\n${element.example}`}</code>
                      </pre>
                    </span>
                    {!element.shouldNotRenderExample && (
                      <span style={{ width: "50%" }}>
                        Example:
                        <div
                          dangerouslySetInnerHTML={{ __html: element.example }}
                        />
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
