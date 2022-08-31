import { useEffect } from "react";
import Confetti from "react-confetti";
import useWindowSize from "../utils/useWindowSize";

export default function CustomConfetti() {
  const [{ height, width }, changeWindowSize] = useWindowSize();

  useEffect(() => {
    changeWindowSize();
  }, []);

  return (
    <div style={{ maxWidth: "100vw !important" }}>
      <Confetti height={height} width={width} />
    </div>
  );
}
