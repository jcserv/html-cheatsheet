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
      { name: '<html>', description: 'Defines the root of an HTML document', example: '<html lang="en">...</html>', shouldNotRenderExample: true },
      { name: '<head>', description: 'Contains metadata/information for the document', example: '<head>\n  <title>Page Title</title>\n</head>', shouldNotRenderExample: true },
      { name: '<body>', description: 'Defines the document\'s body', example: '<body>\n  <h1>Hello, World!</h1>\n</body>' },
      { name: '<!DOCTYPE>', description: 'Defines the document type', example: '<!DOCTYPE html>', shouldNotRenderExample: true },
      { name: '<title>', description: 'Defines a title for the document', example: '<title>My Web Page</title>', shouldNotRenderExample: true },
      { name: '<div>', description: 'Defines a block-level section in a document', example: '<div class="container">...</div>' },
      { name: '<span>', description: 'Defines an inline section in a document', example: '<p>This is \n  <span style="color: red;">important</span> text.\n</p>' },
    ],
  },
  {
    name: 'Metadata',
    elements: [
      { name: '<base>', description: 'Specifies the base URL/target for all relative URLs in a document', example: '<base href="https://www.example.com/">\n<a href="/404">Click here</a>' },
      { name: '<link>', description: 'Defines the relationship between a document and an external resource', example: '<link rel="stylesheet" href="styles.css">', shouldNotRenderExample: true },
      { name: '<meta>', description: 'Defines metadata about an HTML document', example: '<meta charset="UTF-8">', shouldNotRenderExample: true },
      { name: '<style>', description: 'Defines style information for a document', example: '<style>body { background-color: #000000; }</style>', shouldNotRenderExample: true },
    ],
  },
  {
    name: 'Text Content',
    elements: [
      { name: '<p>', description: 'Defines a paragraph', example: '<p>This is a paragraph.</p>' },
      { name: '<h1> through <h6>', description: 'Defines HTML headings', example: '<h1>Main Heading</h1>\n<h3>Subheading</h3>' },
      { name: '<br>', description: 'Defines a single line break', example: 'Line 1<br>Line 2' },
      { name: '<hr>', description: 'Defines a thematic change in the content', example: '<p>Section 1</p>\n<hr>\n<p>Section 2</p>' },
    ],
  },
  {
    name: 'Text Formatting',
    elements: [
      { name: '<strong>', description: 'Defines important text', example: '<strong>This text is important!</strong>' },
      { name: '<em>', description: 'Defines emphasized text', example: '<em>This text is emphasized</em>' },
      { name: '<i>', description: 'Defines a part of text in an alternate voice or mood', example: '<i>This text is italic</i>' },
      { name: '<b>', description: 'Defines bold text', example: '<b>This text is bold</b>' },
      { name: '<u>', description: 'Defines underlined text', example: '<u>This text is underlined</u>' },
      { name: '<small>', description: 'Defines smaller text', example: '<small>This is smaller text</small>' },
      { name: '<sub>', description: 'Defines subscripted text', example: 'H<sub>2</sub>O' },
      { name: '<sup>', description: 'Defines superscripted text', example: 'X<sup>2</sup>' },
      { name: '<mark>', description: 'Defines marked/highlighted text', example: '<mark>Highlighted text</mark>' },
    ],
  },
  {
    name: 'Lists',
    elements: [
      { name: '<ul>', description: 'Defines an unordered list', example: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>' },
      { name: '<ol>', description: 'Defines an ordered list', example: '<ol>\n  <li>First item</li>\n  <li>Second item</li>\n</ol>' },
      { name: '<li>', description: 'Defines a list item', example: '<li>List item</li>' },
      { name: '<dl>', description: 'Defines a description list', example: '<dl>\n  <dt>Term</dt>\n  <dd>Description</dd>\n</dl>' },
      { name: '<dt>', description: 'Defines a term/name in a description list', example: '<dt>HTML</dt>' },
      { name: '<dd>', description: 'Defines a description of a term/name in a description list', example: '<dd>HyperText Markup Language</dd>' },
    ],
  },
  {
    name: 'Links',
    elements: [
      { name: '<a>', description: 'Defines a hyperlink', example: '<a href="https://www.example.com">Visit Example.com</a>' },
      { name: '<nav>', description: 'Defines navigation links', example: '<nav>\n  <a href="#home">Home</a>\n  <a href="#about">About</a>\n</nav>' },
    ],
  },
  {
    name: 'Images and Multimedia',
    elements: [
      { name: '<img>', description: 'Defines an image', example: '<img src="https://picsum.photos/200">' },
      { name: '<audio>', description: 'Defines sound content', example: '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>' },
      { name: '<video>', description: 'Defines a video or movie', example: '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>' },
      { name: '<source>', description: 'Defines multiple media resources for media elements', example: '<source src="movie.mp4" type="video/mp4">' },
      { name: '<track>', description: 'Defines text tracks for media elements', example: '<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">', shouldNotRenderExample: true },
      { name: '<figure>', description: 'Specifies self-contained content', example: '<figure>\n  <img src="https://picsum.photos/100" alt="Description">\n  <figcaption>Figure caption</figcaption>\n</figure>' },
      { name: '<figcaption>', description: 'Defines a caption for a <figure> element', example: '<figcaption>This is a caption for the figure</figcaption>' },
    ],
  },
  {
    name: 'Table Content',
    elements: [
      { name: '<table>', description: 'Defines a table', example: '<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</table>' },
      { name: '<tr>', description: 'Defines a row in a table', example: '<tr>\n  <td>Row content</td>\n</tr>' },
      { name: '<th>', description: 'Defines a header cell in a table', example: '<th>Header content</th>' },
      { name: '<td>', description: 'Defines a cell in a table', example: '<td>Cell content</td>' },
      { name: '<caption>', description: 'Defines a table caption', example: '<caption>Table Caption</caption>' },
      { name: '<thead>', description: 'Groups the header content in a table', example: '<thead>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n</thead>' },
      { name: '<tbody>', description: 'Groups the body content in a table', example: '<tbody>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</tbody>' },
      { name: '<tfoot>', description: 'Groups the footer content in a table', example: '<tfoot>\n  <tr>\n    <td>Footer 1</td>\n    <td>Footer 2</td>\n  </tr>\n</tfoot>' },
      { name: '<col>', description: 'Specifies column properties for each column within a <colgroup> element', example: '<colgroup>\n  <col style="background-color: yellow">\n  <col style="background-color: red">\n</colgroup>' },
      { name: '<colgroup>', description: 'Specifies a group of one or more columns in a table for formatting', example: '<colgroup>\n  <col span="2" style="background-color: yellow">\n</colgroup>' },
    ],
  },
  {
    name: 'Forms and Input',
    elements: [
      { name: '<form>', description: 'Defines an HTML form for user input', example: '<form action="/submit" method="post">\n  <!-- Form elements go here -->\n</form>' },
      { name: '<input>', description: 'Defines an input control', example: '<input type="text" name="username" placeholder="Enter username">' },
      { name: '<textarea>', description: 'Defines a multiline input control', example: '<textarea name="message" rows="4" cols="50">Enter your message here</textarea>' },
      { name: '<button>', description: 'Defines a clickable button', example: '<button type="submit">Submit</button>' },
      { name: '<select>', description: 'Defines a drop-down list', example: '<select name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>' },
      { name: '<option>', description: 'Defines an option in a drop-down list', example: '<option value="volvo">Volvo</option>' },
      { name: '<optgroup>', description: 'Defines a group of related options in a drop-down list', example: '<optgroup label="Swedish Cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</optgroup>' },
      { name: '<label>', description: 'Defines a label for an <input> element', example: '<label for="username">Username:</label>\n<input type="text" id="username" name="username">' },
      { name: '<fieldset>', description: 'Groups related elements in a form', example: '<fieldset>\n  <legend>Personal Information</legend>\n  <!-- Form elements go here -->\n</fieldset>' },
      { name: '<legend>', description: 'Defines a caption for a <fieldset> element', example: '<legend>Personal Information</legend>' },
      { name: '<datalist>', description: 'Specifies a list of pre-defined options for input controls', example: '<input list="browsers">\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n</datalist>' },
      { name: '<output>', description: 'Defines the result of a calculation', example: '<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">\n  <input type="range" name="a" value="50"> +\n  <input type="number" name="b" value="50"> =\n  <output name="result"></output>\n</form>' },
    ],
  },
  {
    name: 'Scripting',
    elements: [
      { name: '<script>', description: 'Defines a client-side script', example: '<script>\n  console.log("Hello, World!");\n</script>', shouldNotRenderExample: true },
      { name: '<noscript>', description: 'Defines an alternate content for users that do not support client-side scripts', example: '<noscript>Your browser does not support JavaScript!</noscript>', shouldNotRenderExample: true },
      { name: '<canvas>', description: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)', example: '<canvas id="myCanvas" width="200" height="100"></canvas>', shouldNotRenderExample: true },
    ],
  },
  {
    name: 'Semantic and Structure',
    elements: [
      { name: '<article>', description: 'Defines an article', example: '<article>\n  <h2>Article Title</h2>\n  <p>Article content...</p>\n</article>' },
      { name: '<aside>', description: 'Defines content aside from the page content', example: '<aside>\n  <h4>Related links</h4>\n  <ul>\n    <li><a href="#">Link 1</a></li>\n    <li><a href="#">Link 2</a></li>\n  </ul>\n</aside>' },
      { name: '<details>', description: 'Defines additional details that the user can view or hide', example: '<details>\n  <summary>Click to view more</summary>\n  <p>Additional information...</p>\n</details>' },
      { name: '<summary>', description: 'Defines a visible heading for a <details> element', example: '<summary>Click to view more</summary>' },
      { name: '<footer>', description: 'Defines a footer for a document or section', example: '<footer>\n  <p>&copy; 2023 My Website. All rights reserved.</p>\n</footer>' },
      { name: '<header>', description: 'Defines a header for a document or section', example: '<header>\n  <h1>Welcome to My Website</h1>\n  <nav><!-- Navigation menu --></nav>\n</header>' },
      { name: '<main>', description: 'Specifies the main content of a document', example: '<main>\n  <h1>Main Content</h1>\n  <p>This is the main content of the page.</p>\n</main>' },
      { name: '<section>', description: 'Defines a section in a document', example: '<section>\n  <h2>Section Title</h2>\n  <p>Section content...</p>\n</section>' },
      { name: '<time>', description: 'Defines a date/time', example: '<time datetime="2023-07-21 20:00">\n  July 21, 2023 at 8:00 PM\n</time>' },
    ],
  },
  {
    name: 'Embedded Content',
    elements: [
      { name: '<embed>', description: 'Defines a container for an external application', example: '<embed src="game.swf" width="300" height="300">' },
      { name: '<iframe>', description: 'Defines an inline frame', example: '<iframe src="https://www.example.com" width="200">\n</iframe>' },
      { name: '<object>', description: 'Defines an embedded object', example: '<object data="file.pdf" type="application/pdf" width="300" height="200"></object>', shouldNotRenderExample: true },
      { name: '<param>', description: 'Defines a parameter for an object', example: '<object data="movie.swf">\n  <param name="autoplay" value="true">\n</object>' },
    ],
  },
]