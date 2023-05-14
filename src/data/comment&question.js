export const userCommentInput = {
    comment:[
        {
            name:'user_alias_name'  ,
            rules: {
                required: "وارد کردن نام اجباری میباشد"
            },
            label: "نام مستعار"
        },
        {
            name:'title'  ,
            rules: {
                required: "وارد کردن عنوان نظر اجباری میباشد"
            },
            label: "عنوان نظر "
        },

        {
            name:'content'  ,
            rules: {
                required: "وارد کردن نظر اجباری میباشد"
            },
            label: "نظر خود را بنویسید" ,
            props : {
                multiline : true ,
                rows : 3
            }

        }
    ]
};