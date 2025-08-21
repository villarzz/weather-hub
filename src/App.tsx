import Home from "./pages/Home";
import Footer from "./components/footer";
import { Analytics } from '@vercel/analytics/next';
import { WeatherProvider } from "./context/WeatherProvider";

export default function App() {
  return (
    <div className="min-h-screen min-w-screen max-h-screen max-w-screen overflow-x-hidden bg-sky-900/50">
      <WeatherProvider>
        <Home />
      </WeatherProvider>
      <Footer />
      <Analytics />
    </div>
  );
}
