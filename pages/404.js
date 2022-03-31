import Link from "next/link";

export default function Custom404() {
  const styles = {
    h1: { color: "white" },
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 10px",
      flexDirection: "column",
    },

    button: {
      border: "none",
      padding: "10px",
      margin: "10px 5px",
      borderRadius: 3,
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Error 404</h1>
      <Link href="/">
        <button style={styles.button}>Go to home screen</button>
      </Link>
    </div>
  );
}
