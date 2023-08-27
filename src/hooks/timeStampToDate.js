export const timeStampToDate = (timeStamp)=>{
    if(timeStamp){
        return Intl.DateTimeFormat('fa', {
            useGrouping: false, year: "numeric", month: "long", day: "numeric"
        }).format(timeStamp * 1000);
    }
}