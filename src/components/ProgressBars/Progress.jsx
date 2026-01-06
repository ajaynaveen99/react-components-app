import { useEffect, useState } from "react";

export default function ProgressBar() {
  const targets = [5, 10, 20, 40, 60, 80, 100];

  const [progress, setProgress] = useState(targets.map(() => 0));
  

  useEffect(() => {
   
    setTimeout(() => {
      setProgress(targets);
    }, 300);
  }, []);

  return (
    <div  style={{ padding: "20px", width: "400px", textAlign: "center", margin: " 150px auto" }}>
      <h3>Multiple Progress Bars</h3>

      {progress.map((value) => (
            <div
            style={{
              height: "20px",
              border:" 3px solid #d3cdcdff",
              borderRadius: "10px",
              background: "#ddddddff",
              overflow: "hidden",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${value}%`,
                fontWeight: "bold",
                color: "solid",
                background: "#02ff24ff",
                transition: "width 1.9s ease",
                textAlign: "right",

              }}
            >{value}%
          </div> 
            </div>
      ))}
    </div>
  );
}
