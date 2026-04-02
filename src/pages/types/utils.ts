// Convert Date -> string for input
export const formatDateForInput = (date: Date)=> {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

export const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        weekday: "short",   // Mon
        year: "numeric",    // 2026
        month: "short",     // Apr
        day: "numeric",     // 7
        hour: "2-digit",    // 04
        minute: "2-digit",  // 30
        hour12: true,       // AM/PM
    }).format(date);
};