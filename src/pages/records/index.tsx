import NavBar from "@/components/NavBar";
import { Plus } from "@/icons/Plus";
import styles from "@/styles/Records/record.module.css";
export default function records() {
  return (
    <>
      <NavBar />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#F3F4F6",
          color: "black",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "30vw",
            height: "80vh",
            backgroundColor: "white",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h2>Records</h2>
          </div>
          <div>
            <Plus />
            <div>Add</div>
          </div>
          <div>
            <div>
              <h4>Types</h4>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" className={styles.checkboxInput} />
                <p>All</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" className={styles.checkboxInput} />
                <p>Income</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" className={styles.checkboxInput} />
                <p>Expense</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "60vw", height: "80vh" }}></div>
      </div>
    </>
  );
}
