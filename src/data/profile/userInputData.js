export const userInputData = [
    {
        name: "firstName",
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
        name: "lastName",
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
        name: "melliCode",
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
        name: "phoneNumber",
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
            label: "ایمیل",
        }
    }
]