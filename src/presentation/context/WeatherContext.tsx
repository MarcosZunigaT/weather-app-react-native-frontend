import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { GetWeatherByCityUseCase } from '../../application/useCases/GetWeatherByCityUseCase';
import { container as defaultContainer, createContainer } from '../../infraestructure/di/container';
import AlertHandler from '../utils/AlertHandler';

type WeatherContextValue = {
  getWeatherByCityUseCase: GetWeatherByCityUseCase;
};

const WeatherContext = createContext<WeatherContextValue | undefined>(undefined);

export const WeatherProvider = ({
  children,
  overrideContainer,
}: {
  children: ReactNode;
  overrideContainer?: ReturnType<typeof createContainer>;
}) => {
  const used = overrideContainer ?? defaultContainer;
  const value = useMemo(() => ({ getWeatherByCityUseCase: used.getWeatherByCityUseCase }), [used]);

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) AlertHandler.showError("useWeatherContext debe ser usado dentro de un WeatherProvider");
  return context;
};

export default WeatherContext;
