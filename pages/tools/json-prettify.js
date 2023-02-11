import { useState } from 'react';
import styles from './json-prettify.module.css';
import Layout from '../../components/layout'

const EXAMPLE_DATA_JSON = [
  {
    "name": "John Smith",
    "age": 35,
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zip": "98765"
    }
  },
  {
    "name": "Jane Doe",
    "age": 28,
    "address": {
      "street": "456 Market St",
      "city": "New City",
      "state": "NY",
      "zip": "12345"
    }
  }
];

const SAMPLE_DATA_JSON = `{
  "name": "John Smith",
  "age": 30,
  "address": {
    "streetAddress": "25 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021"
  },
  "skills": [
    "JavaScript",
    "React",
    "Node.js"
  ]
}`

function JSONPrettyPrinter(props) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setInput(e.target.result);
      };
      reader.readAsText(file);
    }
  }

  function prettyPrint() {
    try {
      const parsedInput = JSON.parse(input);
      const prettyOutput = JSON.stringify(parsedInput, null, 2);
      setOutput(prettyOutput);
    } catch (error) {
      setOutput(error.message);
    }
  }

  function minify() {
    try {
      const parsedInput = JSON.parse(input);
      const minifiedOutput = JSON.stringify(parsedInput);
      setOutput(minifiedOutput);
    } catch (error) {
      setOutput(error.message);
    }
  }

  function copyToClipboard() {
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state === 'granted' || result.state === 'prompt') {
        navigator.clipboard.writeText(output);
      }
    });
  }

  function download() {
    const a = document.createElement('a');
    a.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(output)}`
    );
    a.setAttribute('download', 'output.json');
    a.click();
  }

  function insertSampleJSON() {
    setInput(SAMPLE_DATA_JSON);
  }

  function clear() {
    setInput('');
    setOutput('');
  }

  return (
    <div className='single'>
      <div id='wrapper'>
        <Layout
          title={'Json Prettify/Minify Tool - MikeTsamis.com'}
          description={'Easily format and beautify your JSON code with our online JSON editor. Features include JSON validation, minify, upload, copy, and download. Perfect for developers and anyone working with JSON data.'}
        >
          <h2 className={styles.toolHeader}>JSON Prettify/Minify Tool</h2>
          <div className={styles.container}>
            <div className={styles.left}>
              <h3 className={styles.center}>Input</h3>
              <button className={styles.button} onClick={insertSampleJSON}>Sample JSON</button>
              <button className={styles.button} onClick={clear}>Clear</button>
              <textarea className={styles.textarea} value={input} onChange={handleChange} />
              <input className={styles.fileInput} type="file" onChange={handleFileChange} />
            </div>
            <div className={styles.center}>
                <button className={styles.button} onClick={prettyPrint}> Prettify</button>
                <button className={styles.button} onClick={minify}>Minify</button>
            </div>
            <div className={styles.right}>
              <h3 className={styles.center}>Output</h3>
              <button className={styles.button} onClick={copyToClipboard}>Copy</button>
              <button className={styles.button} onClick={download}>Download</button>
              <textarea className={styles.textarea} value={output} readOnly />
            </div>
          </div>
          <div>
            <h2>Instructions for using JSON Prettify/Minify</h2>
            <ol>
              <li>Copy/paste your JSON data into the "Input" text area or upload a JSON file using the "Choose File" button.</li>
              <li>You can format and beautify the data by clicking on the "Prettify" button. This will automatically indent the JSON data and make it more readable.</li>
              <li>If you prefer to have the data in a more compact format to conserve space, you can click on the "Minify" button to remove any extra white spaces from the JSON data.</li>
              <li>The prettified/minified JSON data will appear in the "Output" text area. You can copy the output data to your clipboard by clicking on the "Copy" button.</li>
              <li>Click "Download" to download a .JSON file with your output.</li>
              <li>Click "Clear" to clear all input.</li>
              <li>Click "Sample JSON" if you need to generate dummy JSON data.</li>
            </ol>
            <p>That's all there is to it! With this JSON prettify/minify editor tool, you can easily format and beautify your JSON data, making it easier to read and understand.</p>
          </div>
          <div>
            <h2>What is JSON?</h2>
            <p>JSON (JavaScript Object Notation) is a simple format for exchanging data. It can be easily read, written and analyzed by both us and machines. It's based on a subset of the JavaScript programming language and is mostly used to transfer data between a server and web application. JSON is a completely language-independent textual format, but uses conventions familiar to programmers from the C family of languages such as C, C++, C#, Java, JavaScript, Perl, and Python. JSON is often used as a simple data exchange format between different systems, making it easy to read and write.</p>
            <p>An example of JSON data is a list of objects, each representing a person, with properties such as name, age, and address:</p>
            <pre>
              <code>
                {JSON.stringify(EXAMPLE_DATA_JSON, null, 2)}
              </code>
            </pre>
            <p>In the above example, we have an array of objects where each property is a key-value pair. Each object above contains a person's name, age and address.</p>
            <h2>What's the Difference Between JSON and JSONP and Which Content Type Do I Use?</h2>
            <p>JSON and JSONP are two data formats commonly used in web development to exchange data between the client and server. Here's the difference between JSON and JSONP and when you should use each one.</p>
            <p>JSON is used to represent data in a structured format and is commonly used in APIs to send data between the client and server. The content type for JSON data should be set to <b>"application/json"</b>.</p>
            <p>JSONP (JSON with Padding) is a technique used to overcome the same-origin policy limitation placed by browsers. The same-origin policy prevents a website from making requests to a different domain from the website's. JSONP works by wrapping the JSON data in a callback function and passing that JSON data as an argument to that function like this:</p>
            <pre>
              <code>
                {`myFunctionCall({"Name": "John", "Sport": "Baseball"});`}
              </code>
            </pre>
            <p>The content type of JSONP data should be set to <b>"application/javascript"</b>.</p>
            <p>Therefore, if you need to exchange data between the client and server within the same domain, use JSON. Use JSONP when you need to exchange data between the client and server in different domains. Both JSON and JSONP are useful data formats with different purposes and use cases.</p>
            <p>Here are some other great resources explaining JSON format in more detail:</p>
            <ul>
              <li><a title="JSON.org" href="https://json.org/">JSON.org</a></li>
              <li><a title="w3schools.com's JSON Tutorial" href="https://www.w3schools.com/js/js_json_intro.asp">JSON Tutorial from w3schools.com</a></li>
              <li><a title="Wikipedia link to JSON" href="https://en.wikipedia.org/wiki/JSON">JSON Explained on Wikipedia</a></li>
            </ul>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default JSONPrettyPrinter;
