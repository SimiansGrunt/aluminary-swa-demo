// src/NavBar.jsx
import useAuth from "./useAuth";

export default function NavBar() {
    const { user, loading } = useAuth();
    if (loading) return null;

    return (
        <nav style={{ padding: 12, display: "flex", gap: 12, borderBottom: "1px solid #eee" }}>
            <a href="/">Home</a>
            <a href="/app/dashboard">App</a>
            <div style={{ marginLeft: "auto" }}>
                {user ? (
                    <>
            <span style={{ marginRight: 8 }}>
              Signed in as <strong>{user.userDetails}</strong>
            </span>
                        <a href="/logout">Logout</a>
                    </>
                ) : (
                    <a href="/login">Login with GitHub</a>
                )}
            </div>
        </nav>
    );
}
