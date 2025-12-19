import { Platform } from 'react-native';

// Se usa para emuladores Android e iOS con Expo
// En mi caso el emulador android tenia problemas con usar localhost
const Base_URL =
  Platform.select({
    ios: process.env.EXPO_PUBLIC_API_URL_IOS,
    android: process.env.EXPO_PUBLIC_API_URL_ANDROID,
  });

async function request(path: string, options?: RequestInit): Promise<any> {
  const base = String(Base_URL);
  const url = `${base.replace(/\/$/, "")}/${String(path).replace(/^\//, "")}`;
  const defaultHeaders = { "Content-Type": "application/json" };

  const response = await fetch(url, {
    method: "GET",
    ...options,
    headers: { ...defaultHeaders, ...(options?.headers || {}) },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`HTTP ${response.status} - ${text}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export default request;
