export const getPublicaciones = async () => {
    const res = await fetch('http://localhost:8000/api/publicaciones',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
};

export const getPublicacionById = async (id: number) => {
    const res = await fetch(`http://localhost:8000/api/publicaciones/${id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
};

export const addPublicacion = async (formData: FormData) => {
    const res = await fetch("http://localhost:8000/api/publicaciones", {
        method: "POST",
        body: formData,
    });

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
};

export const deletePublicacion = async (id:number) => {
    const res = await fetch(`http://localhost:8000/api/publicaciones/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data)
    return data;
};

export const updatePublicacion = async(formData:FormData, id:number) => {
    console.log(id)
    const res = await fetch(`http://localhost:8000/api/publicaciones/${id}`,{
        method: "PUT",
        body: formData
    })
    console.log(id)
    const data = await res.json();
    console.log(data)
    return data;
}