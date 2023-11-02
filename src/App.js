import React, { useState, useEffect } from "react";
import temp from "./template";

const App = () => {
  const uname = "guru";
  const age = 18;
  const city = "bbsr";
  const arr = temp({ uname, age, city });
  const text = arr[0].summary;

  console.log(text[0].summary);

  return (
    <React.StrictMode>
      <div>
        <h1>{text}</h1>
      </div>
    </React.StrictMode>
  );
};

export default App;
