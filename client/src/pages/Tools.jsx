import { useState } from "react";
import axios from "axios";

function Tools() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const Url = "http://localhost:3300/chat";
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${Url}`, { prompt })
      .then((res) => setResponse(res.data))
      .catch((error) => {
        console.log(error);
      });
  }

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div>
      <h1>Use Our AI</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Generate Name</label>
        <input
          type="text"
          placeholder="enter text"
          value={prompt}
          onChange={handlePrompt}
        />
      </form>
      <p>{response}</p>
    </div>
  );
}

export default Tools;
