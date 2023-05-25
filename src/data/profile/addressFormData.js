export const addressFormData = [
    {
        name: 'title',
        label: 'نام آدرس',
        rules: {
            required: 'وارد کردن نام آدرس اجباری است',
        }
    },
    {
        name: 'post_code',
        label: 'کد پستی',
        rules: {
            required: 'وارد کردن کد پستی اجباری است',
            pattern : {
                value : /^[0-9]*$/ ,
                message : 'فقط وارد کردن عدد مجار است'
            }
        },
        otherProps: {
            type: 'phone'
        }
    },
    {
        name: 'pelak',
        label: 'پلاک',
        rules: {
            required: 'وارد کردن پلاک اجباری است',
            pattern : {
                value : /^[0-9]*$/ ,
                message : 'فقط وارد کردن عدد مجار است'
            }
        },
        otherProps: {
            type: 'phone'
        }
    },
    {
        name: 'vahed',
        label: 'واحد',
        rules: {
            required: 'وارد کردن شماره واحد اجباری است',
            pattern: {
                value : /^[0-9]*$/ ,
                message : 'فقط وارد کردن عدد مجار است'
            }
        },
        otherProps: {
            type: 'phone'
        }
    },
    {
        name:'full_address'  ,
        rules: {
            required: "وارد کردن آدرس اجباری میباشد"
        },
        label: "آدرس کامل و توضیحات تکمیلی را وارد کنید" ,
        otherProps : {
            multiline : true ,
            rows : 3
        }

    }

]