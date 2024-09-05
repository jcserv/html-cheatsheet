export interface HTMLElement {
  name: string
  description: string
  example: string
  shouldNotRenderExample?: boolean
}

export interface Category {
  name: string
  elements: HTMLElement[]
}


export const htmlCategories: Category[] = [
  {
    name: 'Document Structure',
    elements: [
      { name: '<html>', description: 'Root element of an HTML document', example: '<html lang="en">...</html>', shouldNotRenderExample: true },
      { name: '<head>', description: 'Container for document metadata', example: '<head>\n  <title>Page Title</title>\n</head>', shouldNotRenderExample: true },
      { name: '<body>', description: 'Container for the visible content of the document', example: '<body>\n  <h1>Hello, World!</h1>\n</body>' },
      { name: '<!DOCTYPE>', description: 'Declares the document type', example: '<!DOCTYPE html>', shouldNotRenderExample: true },
      { name: '<title>', description: 'Sets the title of the document', example: '<title>My Web Page</title>', shouldNotRenderExample: true },
      { name: '<div>', description: 'Defines a block-level section in a document', example: '<div class="container">...</div>' },
      { name: '<span>', description: 'Defines an inline section in a document', example: '<p>I\'m \n  <span style="color: red;">important</span>\n</p>' },
    ],
  },
  {
    name: 'Metadata',
    elements: [
      { name: '<base>', description: 'Specifies the base URL for all relative URLs', example: '<base href="https://www.example.com/">\n<a href="/404">Click here</a>' },
      { name: '<link>', description: 'Connects the document to external resources', example: '<link rel="stylesheet" href="styles.css">', shouldNotRenderExample: true },
      { name: '<meta>', description: 'Provides metadata about the HTML document', example: '<meta charset="UTF-8">', shouldNotRenderExample: true },
      { name: '<style>', description: 'Contains style information for the document', example: '<style>\n  body { background-color: #000000; }\n</style>', shouldNotRenderExample: true },
    ],
  },
  {
    name: 'Text Content',
    elements: [
      { name: '<p>', description: 'Represents a paragraph', example: '<p>This is a paragraph.</p>' },
      { name: '<h1> through <h6>', description: 'Represents six levels of section headings', example: '<h1>Main Heading</h1>\n<h3>Subheading</h3>' },
      { name: '<br>', description: 'Produces a line break in text', example: 'Line 1<br>Line 2' },
      { name: '<hr>', description: 'Represents a thematic break between paragraph-level elements', example: '<p>Section 1</p>\n<hr>\n<p>Section 2</p>' },
    ],
  },
  {
    name: 'Text Formatting',
    elements: [
      { name: '<strong>', description: 'Indicates strong importance, seriousness, or urgency', example: '<strong>This text is important!</strong>' },
      { name: '<em>', description: 'Stresses emphasis', example: '<em>This text is emphasized</em>' },
      { name: '<i>', description: 'Represents text in an alternate voice or mood', example: '<i>This text is italic</i>' },
      { name: '<b>', description: 'Draws attention to text', example: '<b>This text is bold</b>' },
      { name: '<u>', description: 'Renders text with an underline', example: '<u>This text is underlined</u>' },
      { name: '<small>', description: 'Makes the text font size smaller', example: '<small>This is smaller text</small>' },
      { name: '<sub>', description: 'Specifies inline text to be displayed as subscript', example: 'H<sub>2</sub>O' },
      { name: '<sup>', description: 'Specifies inline text to be displayed as superscript', example: 'X<sup>2</sup>' },
      { name: '<mark>', description: 'Highlights text', example: '<mark>Highlighted text</mark>' },
    ],
  },
  {
    name: 'Lists',
    elements: [
      { name: '<ul>', description: 'Represents an unordered list', example: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>' },
      { name: '<ol>', description: 'Represents an ordered list', example: '<ol>\n  <li>First item</li>\n  <li>Second item</li>\n</ol>' },
      { name: '<li>', description: 'Represents a list item', example: '<li>List item</li>' },
      { name: '<dl>', description: 'Represents a description list', example: '<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>' },
      { name: '<dt>', description: 'Specifies a term in a description list', example: '<dt>HTML</dt>' },
      { name: '<dd>', description: 'Provides the description for a term in a description list', example: '<dd>HyperText Markup Language</dd>' },
    ],
  },
  {
    name: 'Links',
    elements: [
      { name: '<a>', description: 'Creates a hyperlink', example: '<a href="https://www.example.com">\n  Visit Example.com\n</a>' },
      { name: '<nav>', description: 'Represents a section of navigation links', example: '<nav>\n  <a href="#home">Home</a>\n  <a href="#about">About</a>\n</nav>' },
    ],
  },
  {
    name: 'Images and Multimedia',
    elements: [
      { name: '<img>', description: 'Embeds an image', example: '<img src="https://picsum.photos/200">' },
      { name: '<audio>', description: 'Embeds sound content', example: '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>' },
      { name: '<video>', description: 'Embeds video content', example: '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>' },
      { name: '<source>', description: 'Specifies multiple media resources for media elements', example: '<source src="movie.mp4" type="video/mp4">' },
      { name: '<track>', description: 'Specifies text tracks for media elements', example: '<track src="subtitles_en.vtt"\n kind="subtitles" srclang="en"\n label="English">', shouldNotRenderExample: true },
      { name: '<figure>', description: 'Represents self-contained content', example: '<figure>\n  <img src="https://picsum.photos/100">\n  <figcaption>Figure caption</figcaption>\n</figure>' },
      { name: '<figcaption>', description: 'Represents a caption for a <figure> element', example: '<figcaption>\n  This is a caption for the figure\n</figcaption>' },
    ],
  },
  {
    name: 'Table Content',
    elements: [
      { name: '<table>', description: 'Represents tabular data', example: '<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</table>' },
      { name: '<tr>', description: 'Represents a row in a table', example: '<tr>\n  <td>Row content</td>\n</tr>' },
      { name: '<th>', description: 'Represents a header cell in a table', example: '<th>Header content</th>' },
      { name: '<td>', description: 'Represents a data cell in a table', example: '<td>Cell content</td>' },
      { name: '<caption>', description: 'Specifies a table caption', example: '<caption>Table Caption</caption>' },
      { name: '<thead>', description: 'Groups header content in a table', example: '<thead>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n</thead>' },
      { name: '<tbody>', description: 'Groups body content in a table', example: '<tbody>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</tbody>' },
      { name: '<tfoot>', description: 'Groups footer content in a table', example: '<tfoot>\n  <tr>\n    <td>Footer 1</td>\n    <td>Footer 2</td>\n  </tr>\n</tfoot>' },
      { name: '<col>', description: 'Specifies column properties for table columns', example: '<colgroup>\n  <col style="background-color: yellow">\n  <col style="background-color: red">\n</colgroup>', shouldNotRenderExample: true },
      { name: '<colgroup>', description: 'Specifies a group of columns in a table for formatting', example: '<colgroup>\n  <col span="2" style="background-color: red">\n</colgroup>', shouldNotRenderExample: true },
    ],
  },
  {
    name: 'Forms and Input',
    elements: [
      { name: '<form>', description: 'Creates an HTML form for user input', example: '<form action="/submit" method="post">\n  <!-- Form elements go here -->\n</form>' },
      { name: '<input>', description: 'Creates an input control', example: '<input type="text" name="username" \nplaceholder="Enter username">' },
      { name: '<textarea>', description: 'Creates a multiline text input control', example: '<textarea name="message" rows="4" cols="40">\n  Enter your message here\n</textarea>' },
      { name: '<button>', description: 'Creates a clickable button', example: '<button type="submit">Submit</button>' },
      { name: '<select>', description: 'Creates a drop-down list', example: '<select name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>' },
      { name: '<option>', description: 'Represents an option in a select list', example: '<option value="volvo">Volvo</option>' },
      { name: '<optgroup>', description: 'Groups related options in a select list', example: '<optgroup label="Swedish Cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</optgroup>' },
      { name: '<label>', description: 'Represents a label for an input element', example: '<label for="username">Username:</label>\n<input type="text" id="username" name="username">' },
      { name: '<fieldset>', description: 'Groups related form elements', example: '<fieldset>\n  <legend>Personal Information</legend>\n  <!-- Form elements go here -->\n</fieldset>' },
      { name: '<legend>', description: 'Represents a caption for a fieldset element', example: '<legend>Personal Information</legend>' },
      { name: '<datalist>', description: 'Specifies a list of pre-defined options for input controls', example: '<input list="browsers">\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n</datalist>' },
      { name: '<output>', description: 'Represents the result of a calculation', example: '<form \noninput="result.value=parseInt(a.value)+\nparseInt(b.value)">\n  <input type="range" name="a" value="50"> +\n  <input type="number" name="b" value="50"> =\n  <output name="result"></output>\n</form>' },
    ],
  },
  {
    name: 'Scripting',
    elements: [
      { name: '<script>', description: 'Embeds or references a client-side script', example: '<script>\n  console.log("Hello, World!");\n</script>', shouldNotRenderExample: true },
      { name: '<noscript>', description: 'Provides alternate content for users without client-side scripting', example: '<noscript>\n  Your browser does not support JavaScript!\n</noscript>', shouldNotRenderExample: true },
      { name: '<canvas>', description: 'Container for graphics created with JavaScript', example: '<canvas id="myCanvas" width="200" \n height="100"></canvas>', shouldNotRenderExample: true },
    ],
  },
  {
    name: 'Semantic and Structure',
    elements: [
      { name: '<article>', description: 'Represents a self-contained composition', example: '<article>\n  <h2>Article Title</h2>\n  <p>Article content...</p>\n</article>' },
      { name: '<aside>', description: 'Represents content tangentially related to the main content', example: '<aside>\n  <h4>Related links</h4>\n  <ul>\n    <li><a href="#">Link 1</a></li>\n    <li><a href="#">Link 2</a></li>\n  </ul>\n</aside>' },
      { name: '<details>', description: 'Creates a disclosure widget', example: '<details>\n  <summary>Click to view more</summary>\n  <p>Additional information...</p>\n</details>' },
      { name: '<summary>', description: 'Specifies a visible heading for a details element', example: '<summary>Click to view more</summary>' },
      { name: '<footer>', description: 'Represents a footer for a document or section', example: '<footer>\n  <p>&copy; 2023 My Website. \nAll rights reserved.</p>\n</footer>' },
      { name: '<header>', description: 'Represents introductory content for its nearest sectioning content', example: '<header>\n  <h1>Welcome to My Website</h1>\n  <nav><!-- Navigation menu --></nav>\n</header>' },
      { name: '<main>', description: 'Represents the dominant content of the document', example: '<main>\n  <h1>Main Content</h1>\n  <p>\n    This is the main content of the page.\n  </p>\n</main>' },
      { name: '<section>', description: 'Represents a standalone section of a document', example: '<section>\n  <h2>Section Title</h2>\n  <p>Section content...</p>\n</section>' },
      { name: '<time>', description: 'Represents a specific period in time', example: '<time datetime="2024-09-04 20:00">\n  Sept 4, 2024 at 8:00 PM\n</time>' },
    ],
  },
  {
    name: 'Embedded Content',
    elements: [
      { name: '<embed>', description: 'Embeds external content', example: '<embed src="game.swf" width="300" \nheight="300">' },
      { name: '<iframe>', description: 'Embeds another HTML page into the current one', example: '<iframe src="https://www.example.com" \nwidth="200">\n</iframe>' },
      { name: '<object>', description: 'Embeds external resources', example: '<object data="file.pdf" \ntype="application/pdf" width="300" \nheight="200"></object>', shouldNotRenderExample: true },
      { name: '<param>', description: 'Specifies parameters for an object', example: '<object data="movie.swf">\n  <param name="autoplay" value="true">\n</object>' },
    ],
  },
]