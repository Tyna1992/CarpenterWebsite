

import notify from "../Notifications/Notify.jsx";

export const fetchPrices = async (setPrices, setLoading, setError) => {
    try {
        const response = await fetch("/api/Price/GetAllPrices", {
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
            setPrices(data);
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

export const handleDelete = async (job, setPrices, setError) => {
    console.log(`Deleting job: ${job}`);
    try {
        const response = await fetch(`/api/Price/DeletePrice/${job}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            notify("Ár törölve", "success");
            setPrices((prevPrices) => prevPrices.filter((item) => item.job !== job));
        } else {
            setError(true);
            notify("error", "Hiba történt az ár törlése közben.");
        }
    } catch (error) {
        setError(true);
        console.error("Error deleting price:", error);
    }
};

export const handleEditClick = (priceItem, setSelectedPrice, setOpen) => {
    setSelectedPrice(priceItem);
    setOpen(true);
};

export const handleClose = (setOpen, setSelectedPrice) => {
    setOpen(false);
    setSelectedPrice(null);
};