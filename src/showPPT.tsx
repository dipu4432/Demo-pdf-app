const ShowPPT = () => {
  return (
    <div>
      <h2>PowerPoint Viewer</h2>

      <iframe
        src="/files/UNIT-5.pdf"      
        width="100%"
        height="600px"
        style={{
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default ShowPPT;
