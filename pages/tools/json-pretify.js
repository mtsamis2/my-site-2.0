import { useState } from 'react';
import styles from './json-pretify.module.css';
import Layout from '../../components/layout'

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
    setInput(`{
    "name": "John Smith",
    "age": 30,
    "address": {
      "streetAddress": "21 2nd Street",
      "city": "New York",
      "state": "NY",
      "postalCode": "10021"
    },
    "skills": [
      "JavaScript",
      "React",
      "Node.js"
    ]
  }`);
  }

  function clear() {
    setInput('');
    setOutput('');
  }

  return (
    <div className='single'>
      <div id='wrapper'>
        <Layout
          title={'Json Pretify/Minify - MikeTsamis.com'}
          description={'Easily format and beautify your JSON code with our online JSON editor. Features include JSON validation, minify, upload, copy, and download. Perfect for developers and anyone working with JSON data.'}
        >
          <h2 className={styles.toolHeader}>JSON Pretify/Minify Tool</h2>
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
            <h2>Instructions for using JSON Pretify/Minify</h2>
            <ol>
              <li>Copy/paste your JSON data into the "Input" text area or upload a JSON file using the "Choose File" button.</li>
              <li>You can format and beautify the data by clicking on the "Prettify" button. This will automatically indent the JSON data and make it more readable.</li>
              <li>If you prefer to have the data in a more compact format to conserve space, you can click on the "Minify" button to remove any extra white spaces from the JSON data.</li>
              <li>The prettified/minified JSON data will appear in the "Output" text area. You can copy the output data to your clipboard by clicking on the "Copy" button.</li>
              <li>Click "Download" to download a .JSON file with your output.</li>
              <li>Click "Clear" to clear all input.</li>
              <li>Click "Sample JSON" if you need to generate dummy JSON data.</li>
            </ol>
            <p>That's all there is to it! With this JSON pretify/minify editor tool, you can easily format and beautify your JSON data, making it easier to read and understand.</p>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default JSONPrettyPrinter;
