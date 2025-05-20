import { Button } from "@/components/ui/button";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div>
      <AnimatedBackground />
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>
    </div>
  );
}

export default App;
