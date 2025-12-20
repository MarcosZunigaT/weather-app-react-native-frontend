
# weather-app-react-native-frontend

Breve introducción
-------------------
Este repositorio contiene la aplicación frontend de ejemplo para consultar el clima desarrollada con React Native / Expo y TypeScript. Está organizada en capas para separar responsabilidades y facilitar pruebas.

**Árbol principal (simplificado)**
```text
weather-app-react-native-frontend/
├─ App.tsx
├─ package.json
├─ README.md
├─ __tests__/
│  ├─ WeatherUI.test.tsx
│  ├─ WeatherErrors.test.tsx
│  └─ WeatherSuccess.test.tsx
├─ src/
│  ├─ application/
│  │  └─ useCases/
│  │     └─ GetWeatherByCityUseCase.ts
│  ├─ domain/
│  │  ├─ entities/
│  │  │  └─ WeatherData.ts
│  │  └─ repositories/
│  ├─ infraestructure/
│  │  ├─ api/
│  │  │  └─ WeatherApi.ts
│  │  └─ repositories/
│  │     └─ WeatherRepositoryImpl.ts
│  └─ presentation/
│     ├─ components/
│     ├─ hooks/
│     │  └─ useWeather.ts
│     └─ screens/
│        └─ WeatherScreen.tsx
└─ assets/
```

**Explicación de la arquitectura implementada**
- **Domain (Dominio):** Contiene las entidades y tipos puros del dominio como `WeatherData`. No depende de frameworks. Ver: [src/domain/entities/WeatherData.ts](src/domain/entities/WeatherData.ts)
- **Application (Casos de uso):** Orquesta la lógica de aplicación y coordina repositorios y entidades. Implementa casos de uso como `GetWeatherByCityUseCase` que exponen la API de la capa de presentación.
- **Infrastructure (Infraestructura):** Implementa detalles externos (HTTP, almacenamiento). Aquí está `infraestructure/api/WeatherApi.ts` que consulta el backend y mapea respuestas a entidades.
- **Presentation (Presentación):** UI, hooks y componentes. `WeatherScreen.tsx` consume el hook `useWeather` (que usa los casos de uso). Los tests de UI y de hooks están en `__tests__`.

Flujo de datos (resumido)
- Usuario → `presentation/screens` (input/acciones)
- `presentation/hooks` invocan → `application/useCases`
- `application` llama a → `infraestructure/repositories` / `infraestructure/api`
- `infraestructure` devuelve datos mapeados a → `domain/entities`

Pruebas y decisiones prácticas
- La suite usa **Jest** con `ts-jest` y `react-test-renderer`. Algunas pruebas se diseñaron para evitar transformar paquetes `react-native` dentro de `node_modules`, lo que simplifica la configuración de CI/local.
- Si quieres usar `@testing-library/react-native` directamente, hay que añadir y configurar transformaciones Babel/metro (`metro-react-native-babel-preset`, `babel-jest` o `jest-expo`) y ajustar `jest.config.js` (esto se probó experimentalmente y fue revertido).

Comandos útiles
---------------
- Instalar dependencias:

```bash
npm install
```

- Ejecutar la app en desarrollo (Expo):

```bash
npx expo start
```
- Ejecutar la app en desarrollo por plataforma:

```bash
npx expo run:android
```

```bash
npx expo run:ios
```

- Ejecutar todas las pruebas:

```bash
npx jest
```

- Ejecutar una prueba específica:

```bash
npx jest __tests__/WeatherUI.test.tsx --runInBand
```

Archivos de interés
-------------------
- `jest.config.js` — configuración actual de Jest (`ts-jest`).
- [src/domain/entities/WeatherData.ts](src/domain/entities/WeatherData.ts) — entidad de dominio.
- [src/infraestructure/api/WeatherApi.ts](src/infraestructure/api/WeatherApi.ts) — cliente HTTP y mapeo de respuestas.
- [src/presentation/hooks/useWeather.ts](src/presentation/hooks/useWeather.ts) — hook que maneja validación, estado y errores.
