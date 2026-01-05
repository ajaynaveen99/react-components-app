import { useEffect, useState } from "react";

export default function Progressbar() {
  const targets = [5, 10, 20, 40, 60, 80, 100];

  const [progress, setProgress] = useState(targets.map(() => 0));
  

  useEffect(() => {
    // allow DOM to paint first
    setTimeout(() => {
      setProgress(targets);
    }, 300);
  }, []);

  return (
    <div style={{ padding: "20px", width: "400px" }}>
      <h3>Multiple Progress Bars</h3>

      {progress.map((value, index) => (
            <div
            style={{
              height: "18px",
              borderRadius: "10px",
              background: "#eee",
              overflow: "hidden",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${value}%`,
                background: "#6ba873ff",
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
