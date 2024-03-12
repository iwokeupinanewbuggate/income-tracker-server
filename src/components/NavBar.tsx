import { Plus } from "@/icons/Plus";
import { GeldIcons } from "@/icons/geld";
import { useRouter } from "next/router";
import PostRecord from "./PostRecord";

const NavBar = () => {
  const queryPath = useRouter().pathname;

  const isPageOnRegisterPage =
    queryPath === "/register" || queryPath === "/login";

  return (
    <div
      style={{
        width: "100vw",
        height: "10px",
        backgroundColor: "white",
        padding: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "5vw",
        paddingRight: "5vw",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <GeldIcons />
        {!isPageOnRegisterPage && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "15vw",
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
              }}
            >
              Dashboard
            </button>
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
              }}
            >
              Records
            </button>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        {!isPageOnRegisterPage && (
          <button
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#0166FF",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            <Plus /> <PostRecord />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
