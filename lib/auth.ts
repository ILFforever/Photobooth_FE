export interface LoginResponse {
  token: string;
  email: string;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }

  return response.json();
}

export function setToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("admin_token", token);
  }
}

export function getToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_token");
  }
  return null;
}

export function clearToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_token");
  }
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

export function logout(): void {
  clearToken();
  if (typeof window !== "undefined") {
    window.location.href = "/admin/login";
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface UserLoginResponse {
  token: string;
  user: User;
}

export interface UserRegisterData {
  email: string;
  password: string;
  name: string;
  otp: string;
}

export interface UserUpdateData {
  name?: string;
  password?: string;
  currentPassword?: string;
}

export async function sendOtp(email: string): Promise<void> {
  const response = await fetch("/api/users/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to send verification code");
  }
}

export async function userRegister(data: UserRegisterData): Promise<UserLoginResponse> {
  const response = await fetch("/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Registration failed");
  }

  return response.json();
}

export async function userLogin(email: string, password: string): Promise<UserLoginResponse> {
  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }

  return response.json();
}

export async function userLogout(): Promise<void> {
  const token = getUserToken();
  if (!token) {
    throw new Error("Not authenticated");
  }

  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Logout failed");
  }
}

export async function getMe(): Promise<User> {
  const token = getUserToken();
  if (!token) {
    throw new Error("Not authenticated");
  }

  const response = await fetch("/api/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch user profile");
  }

  return response.json();
}

export async function updateMe(data: UserUpdateData): Promise<User> {
  const token = getUserToken();
  if (!token) {
    throw new Error("Not authenticated");
  }

  const response = await fetch("/api/users/me", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to update profile");
  }

  return response.json();
}

export function setUserToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("user_token", token);
  }
}

export function getUserToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("user_token");
  }
  return null;
}

export function clearUserToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user_token");
  }
}

export function isUserAuthenticated(): boolean {
  return !!getUserToken();
}

export function userLogoutAndClear(): void {
  clearUserToken();
  if (typeof window !== "undefined") {
    window.location.href = "/";
  }
}
