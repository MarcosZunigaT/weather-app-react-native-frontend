import WeatherScreen from './src/presentation/screens/WeatherScreen';
import { WeatherProvider } from './src/presentation/context/WeatherContext';

export default function App() {
  return (
    <WeatherProvider>
      <WeatherScreen />
    </WeatherProvider>
  );
}
