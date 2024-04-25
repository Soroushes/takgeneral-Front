export const timeStampToDate = (timeStamp)=>{
    if(timeStamp){
        return Intl.DateTimeFormat('fa', {
            useGrouping: false, year: "numeric", month: "numeric", day: "numeric"
        }).format(timeStamp * 1000);
    }
}