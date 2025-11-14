const baseURL=import.meta.env.VITE_BASE_URL;

export const getPosts=async ()=>await fetch(`${baseURL}/posts`)
    .then(res=>res.json());