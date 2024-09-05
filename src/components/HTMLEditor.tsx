import React, { useState, useEffect, useRef } from "react";
import "../styles/HTMLEditor.css";

const HTMLEditor: React.FC = () => {
  const [html, setHtml] = useState("<p>Hello, <strong>world</strong>!</p>");
  const [css, setCss] = useState("p { color: blue; }");
  const [isExpanded, setIsExpanded] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current) {
      const styleElement = document.createElement('style');
      styleElement.textContent = css;
      previewRef.current.appendChild(styleElement);

      return () => {
        if (previewRef.current && previewRef.current.contains(styleElement)) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          previewRef.current.removeChild(styleElement);
        }
      };
    }
  }, [css]);

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtml(e.target.value);
  };

  const handleCssChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCss(e.target.value);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="html-editor-container">
      <h2 onClick={toggleExpand}>
        HTML Editor {isExpanded ? "▼" : "▶"}
      </h2>
      {isExpanded && (
        <div className="html-editor">
          <div className="editor-pane">
            <h3>HTML</h3>
            <textarea
              value={html}
              onChange={handleHtmlChange}
              rows={5}
              cols={50}
            />
            <h3>CSS</h3>
            <textarea
              value={css}
              onChange={handleCssChange}
              rows={5}
              cols={50}
            />
          </div>
          <div className="preview-pane">
            <h3>Preview</h3>
            <div ref={previewRef}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HTMLEditor;