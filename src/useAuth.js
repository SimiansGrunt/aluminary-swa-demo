import { useEffect, useState } from "react";

export default function useAuth() {
    const [user, setUser] = useState(null);     // { identityProvider, userId, userDetails, roles[] }
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/.auth/me")
            .then(res => (res.ok ? res.json() : { clientPrincipal: null }))
            .then(data => setUser(data?.clientPrincipal ?? null))
            .finally(() => setLoading(false));
    }, []);

    return { user, loading };
}
