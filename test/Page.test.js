import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import renderer from 'react-test-renderer';
import Page from '../src/Blog/Page.jsx';

beforeEach(function() {
  this.page = ReactDOM.render(
    <Page />,
    document.body.appendChild(document.createElement('div'))
  );
});

it('has a working function to process text in basic markdown format', function() {
  // all lines with a hash in front of it should be substituted for header tags
  let example_text = '# h1\n## h2\n### h3\n#### h4\n##### h5\n###### h6\n\n';
  // it should split paragraph text on two or more consecutive return statements
  example_text += 'paragraph 1\nparagraph1 continued\n\nparagraph2\n\n';

  // the resulting list should contain the following:
  // <h1>h1</h1>
  // <h2>h2</h2>
  // <h3>h3</h3>
  // <h4>h4</h4>
  // <h5>h5</h5>
  // <h6>h6</h6>

  // note: setState is asynchronous so this might break at some point
  this.page.setState({text: this.page.ProcessText(example_text)});
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[0])).toBe('<h1>h1</h1>');
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[1])).toBe('<h2>h2</h2>');
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[2])).toBe('<h3>h3</h3>');
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[3])).toBe('<h4>h4</h4>');
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[4])).toBe('<h5>h5</h5>');
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[5])).toBe('<h6>h6</h6>');
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[6])).toBe('<p></p>');
  // todo: fix the spaces
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[7])).toBe('<p> paragraph 1 paragraph1 continued</p>');
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[8])).toBe('<p> paragraph2</p>');
  expect(ReactDOMServer.renderToStaticMarkup(this.page.state.text[9])).toBe('<p></p>');
  expect(this.page.state.text.length).toBe(10);
});
