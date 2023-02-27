export const phoneValidator = (phoneNumber)=>{
    if (phoneNumber.length===11 && phoneNumber[0]==='0' && Number(phoneNumber)){
        return phoneNumber.substring(1,12);
    }
    else if (phoneNumber.length===10 && phoneNumber[0]==='9' && Number(phoneNumber)){
        return phoneNumber ;
    }
    else {
        return false ;
    }
}