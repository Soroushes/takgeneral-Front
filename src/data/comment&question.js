export const userCommentInput = {
    comment:[
        {
            name:'borrowed_name'  , 
            rules: {
                required: "وارد کردن نام اجباری میباشد"
            },
            label: "نام "
        },
        {
            name:'comment'  , 
            rules: {
                required: "وارد کردن نظر اجباری میباشد"
            },
            label: "نظر خود را بنویسید"
        }
    ] , 
    question:[
        {
            name:'borrowed_name'  , 
            rules: {
                required: "وارد کردن نام اجباری میباشد"
            },
            label: "نام "
        },
        {
            name:'question'  , 
            rules: {
                required: "وارد کردن پرسش اجباری میباشد"
            },
            label: 'پرسش خود را درباره این کالا ثبت کنید'
        }
    ]
};