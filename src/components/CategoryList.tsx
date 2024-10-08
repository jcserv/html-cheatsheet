import React, { useEffect, useState } from "react";
import { Category, htmlCategories } from "../data/htmlCategories";

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
  }, [categories, expandAll]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const isExpanded = (categoryName: string) =>
    expandedCategories.includes(categoryName);

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
              {category.elements.map((element, index) => (
                <>
                  <li
                    key={`${element.name}-${index}`}
                    className={
                      element.name.toLowerCase().includes(searchQuery) ||
                      element.description.toLowerCase().includes(searchQuery)
                        ? ""
                        : "hidden"
                    }
                  >
                    <div className="text-left">
                      <span>
                        <a
                          href={`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${
                            element.name === htmlCategories[2].elements[1].name
                              ? "Heading_Elements"
                              : element.name.replace(/[<>]/g, "")
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <strong>{element.name}</strong>
                        </a>
                        : {element.description}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-left-w-50">
                        <pre className="code-block">
                          Code: <code>{`\n${element.example}`}</code>
                        </pre>
                      </span>
                      {!element.shouldNotRenderExample && (
                        <span className="w-50">
                          Example:
                          <div
                            dangerouslySetInnerHTML={{
                              __html: element.example,
                            }}
                          />
                        </span>
                      )}
                    </div>
                  </li>
                  <hr />
                </>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
