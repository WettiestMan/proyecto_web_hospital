export const getPublicaciones = async () => {
    const res = await fetch('http://localhost:8000/api/publicaciones',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json()
    return data
};

export const getPublicacionById = async (id: string) => {
    const res = await fetch(`http://localhost:8000/api/publicaciones/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json()
    return data.publicacion
};

export const addPublicacion = async (formData: FormData) => {
    const res = await fetch("http://localhost:8000/api/publicaciones", {
        method: "POST",
        body: formData,
    })

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.json();
    return data
};

export const deletePublicacion = async (id:number) => {
    const res = await fetch(`http://localhost:8000/api/publicacionesdelete/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();
    return data
};

export const updatePublicacion = async(formData:FormData, id:number) => {
    const res = await fetch(`http://localhost:8000/api/publicacionesupdate/${id}`,{
        method: "POST",
        body: formData
    })
    const data = await res.json();
    return data;
}