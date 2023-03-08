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