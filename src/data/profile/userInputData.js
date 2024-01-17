export const userInputData = [
    {
        name: "first_name",
        rules: {
            required: "وارد کردن نام اجباری میباشد",
            pattern: {
                value: /^[\u0600-\u06FF\s]+$/,
                message: "فقط حروف فارسی مجاز است"
            }
        },
        inputProps: {
            label: "نام (اجباری)",
        }
    },
    {
        name: "last_name",
        rules: {
            required: "وارد کردن نام خانوادگی اجباری میباشد",
            pattern: {
                value: /^[\u0600-\u06FF\s]+$/,
                message: "فقط حروف فارسی مجاز است"
            }
        },
        inputProps: {
            label: "نام خانوادگی (اجباری)   ",
        }
    },
    {
        name: "national_code",
        rules: {
            required: "وارد کردن کد ملی اجباری است" ,
            pattern: {
                value : /^([0-9]){10}$/ ,
                message: 'لطفا کد ملی را به درستی وارد کنید'
            }
        },
        inputProps: {
            label: "کد ملی (اجباری)",
        }
    },
    {
        name: "phone_number",
        inputProps: {
            label: "شماره تماس (اجباری)",
            disabled : true
        }
    } ,
    {
        name: "email",
        rules: {
            pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
                message: 'لطفا ایمیل خود را به درستی وارد کنید'
            }
        } ,
        inputProps: {
            label: "ایمیل (اختیاری)",
        }
    }
];
// function checkCodeMeli(code)
// {
//     var L=code.length;
//
//     if(L<8 || parseInt(code,10)==0) return false;
//     code=('0000'+code).substr(L+4-10);
//     if(parseInt(code.substr(3,6),10)==0) return false;
//     var c=parseInt(code.substr(9,1),10);
//     var s=0;
//     for(var i=0;i<9;i++)
//         s+=parseInt(code.substr(i,1),10)*(10-i);
//     s=s%11;
//     return (s<2 && c==s) || (s>=2 && c==(11-s));
//     return true;
// }