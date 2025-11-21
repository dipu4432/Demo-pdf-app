import { useEffect, useState } from "react";

const Front = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/files/Prompt.pdf")
      .then(res => res.text())
      .then(data => setContent(data));
  }, []);

  return (
    <div>
      <h2>Power Point File Content:</h2>
      <pre>{content}</pre>
    </div>
  );
};

export default Front;
