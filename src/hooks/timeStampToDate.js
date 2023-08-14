export const timeStampToDate = (timeStamp)=>{
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false, year: "numeric", month: "long", day: "numeric"
    }).format(timeStamp * 1000);
    return date
}