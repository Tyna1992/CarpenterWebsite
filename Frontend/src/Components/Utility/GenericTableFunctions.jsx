

import notify from "../Notifications/Notify.jsx";

export const fetchData = async (setState, setLoading, setError, route) => {
    try {
        const response = await fetch(route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(response.status === 404) {
            setLoading(false);
            setError(false);
            return;
        }
        if (response.ok) {
            const data = await response.json();
            setState(data);
            setLoading(false);
        } else {
            setError(true);
            setLoading(false);
        }
    } catch (error) {
        setError(true);
        setLoading(false);
    }
};

export const handleDelete = async (endpoint,item, setData, setError) => {
    console.log(`Deleting job: ${item}`);
    try {
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            notify("Törölve", "success");
            setData((prevData) => prevData.filter((i) => i.id !== item.id));
        } else {
            setError(true);
            notify("Hiba történt a törlés közben.", "error");
        }
    } catch (error) {
        setError(true);
        console.error("Error deleting price:", error);
    }
};

export const handleEditClick = (item, setSelectedItem, setOpen) => {
    setSelectedItem(item);
    setOpen(true);
};

export const handleClose = (setOpen, setSelectedItem, clearItem = null) => {
    setOpen(false);
    if (setSelectedItem) {
        setSelectedItem(clearItem);
    }
};