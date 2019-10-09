import Mock from 'mockjs'

Mock.mock('/api/user', (req, res) => {
    return Mock.mock({
        "user|0-3": [{
            "address": "杭州",
            "age": "22",
            "gender": '男',
            "id": 11,
            "name": "张三",
            "tel": "119"
        }, {
             "address": "金华",
             "age": "33",
             "gender": '女',
             "id": 99,
             "name": "李四",
             "tel": "110"
        }]
    })
})
