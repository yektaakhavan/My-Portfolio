import "./Scrollbar.css";
const Scrollbar = ({ children, height = "100%", width = "100%" }) => {
  return (
    <div
      className="scrollbar"
      style={{
        height,
        width,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default Scrollbar;
