import HomePage from "@/components/layout/HomePage";
import { TemaProvider } from "@/components/layout/TemaContext";

export default function Home() {
  return (
    <TemaProvider>
      <HomePage />
    </TemaProvider>
  );
}
