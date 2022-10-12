import { API_URL, versionApp } from "../config";
import useAuthStore from "../stores/auth.store";

export async function apiRequest(method, data = {}) {
  const auth = useAuthStore();
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${auth.bearerToken ? auth.bearerToken : ""}`,
    },
    body: JSON.stringify({
      method,
      data,
      source: versionApp,
    }),
  });
  return await response.json();
}
