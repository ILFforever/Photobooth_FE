# User Authentication Frontend Implementation

## Summary

Updated the frontend to support user authentication with the following 5 API endpoints:

1. `POST /api/users/register` - User registration with email, password, and name
2. `POST /api/users/login` - User login returning JWT with 7-day expiry
3. `POST /api/users/logout` - Protected endpoint to signal token discard
4. `GET /api/users/me` - Protected endpoint to return user profile
5. `PUT /api/users/me` - Protected endpoint to update name and/or password with current-password verification

## Files Created

### `app/login/page.tsx`
User login page with email and password fields. Features:
- Beautiful gradient background matching the site's aesthetic
- Form validation and error handling
- Loading states during authentication
- Link to registration page and home

### `app/register/page.tsx`
User registration page with name, email, password, and confirm password fields. Features:
- Password matching validation
- Minimum password length validation (6 characters)
- Consistent design with login page
- Link to login page and home

### `app/account/page.tsx`
User account/profile page. Features:
- Displays user information (name, email, member since, last updated)
- Update profile form to change name and/or password
- Requires current password when changing password
- Success and error message handling
- Logout functionality
- Protected - redirects to login if not authenticated

### `lib/users.ts`
User-specific API utilities. Functions:
- `getUserLicenses()` - Fetch user's licenses (for future use)
- `requestDemoLicense()` - Request a demo license (for future use)

## Files Modified

### `lib/auth.ts`
Added user authentication functions separate from admin auth:
- `User` interface - User profile data structure
- `UserLoginResponse` interface - Login response with token and user data
- `UserRegisterData` interface - Registration data
- `UserUpdateData` interface - Profile update data
- `userRegister()` - Register new user
- `userLogin()` - Authenticate user
- `userLogout()` - Call logout endpoint
- `getMe()` - Get current user profile
- `updateMe()` - Update user profile
- `setUserToken()` - Store user JWT in localStorage
- `getUserToken()` - Retrieve user JWT from localStorage
- `clearUserToken()` - Remove user JWT from localStorage
- `isUserAuthenticated()` - Check if user is logged in
- `userLogoutAndClear()` - Logout and redirect to home

**Note**: User auth uses `user_token` localStorage key, separate from `admin_token` for admin auth.

### `lib/api.ts`
Updated backend URL handling:
- Exported `getBackendUrl()` for reuse in other files
- Added `getAuthToken()` helper that checks both admin and user tokens
- Used `Record<string, unknown>` instead of `any` for type safety

## Key Design Decisions

1. **Separate Auth Systems**: User authentication is completely separate from admin authentication, using different localStorage keys (`user_token` vs `admin_token`) and different API endpoints.

2. **Protected Routes**: The account page checks authentication on mount and redirects to `/login` if not authenticated.

3. **Password Update Security**: Updating password requires the current password for verification, preventing unauthorized changes.

4. **Consistent Design**: All user auth pages follow the same design pattern as the admin login page with gradient backgrounds, glass-morphism cards, and smooth animations.

5. **Type Safety**: Full TypeScript support with interfaces for all request/response types.

6. **Backend URL Handling**: Centralized backend URL configuration that supports:
   - Runtime configuration via `window.__NEXT_PUBLIC_BACKEND_URL__`
   - Environment variable `NEXT_PUBLIC_BACKEND_URL`
   - Fallback to current origin for local development
   - Default to `http://localhost:3001` if nothing else is configured

## Usage Examples

### Login
```typescript
import { userLogin, setUserToken } from "@/lib/auth";

const data = await userLogin(email, password);
setUserToken(data.token);
```

### Register
```typescript
import { userRegister, setUserToken } from "@/lib/auth";

const data = await userRegister({ name, email, password });
setUserToken(data.token);
```

### Get Profile
```typescript
import { getMe } from "@/lib/auth";

const user = await getMe();
```

### Update Profile
```typescript
import { updateMe } from "@/lib/auth";

// Update name only
await updateMe({ name: "New Name" });

// Update password (requires current password)
await updateMe({ 
  password: "newPassword",
  currentPassword: "oldPassword"
});
```

### Logout
```typescript
import { userLogout, clearUserToken } from "@/lib/auth";

await userLogout();
clearUserToken();
```

## Testing

To test the user authentication:

1. Navigate to `/register` and create a new account
2. You'll be redirected to `/account` automatically
3. Update your profile or change password
4. Sign out
5. Navigate to `/login` and sign back in
6. Try accessing `/account` while logged out - you should be redirected to `/login`

All files pass ESLint with no errors or warnings.