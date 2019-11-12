// export default 和 export 的使用方法

// 在 ES6 中，也通过 规范的形式，规定了 ES6 中如何 导入 和 导出 模块
// ES6 中导入模块，使用 import 模块名称 from '模块标识符'   import '标识路径'
// ES6 中，使用 export default 和 export 向外暴露成员

export default {
    name:'zs',
    age:20
}

// 注意：export default 向外暴露的成员，可以使用任意的变量来接收
// 注意：在一个模块中，export default 只允许向外暴露一次
// 注意：在一个模块中，可以同时使用 export default 和 export 向外暴露成员

export var title = '小星星'
export var content = '挂在天空上'

// 注意：使用 export 向外暴露的成员，只能使用 { } 的形式来接收，这种形式，叫做【按需导出】
// 注意：export 可以向外暴露多个成员，同时，如果某些成员，我们在 import 的时候，不需要，则可以不再 {} 中定义
// 注意：使用 export 导出的成员，必须严格按照 导出时候的名称，来使用 {} 按需接收
// 注意：使用 export 导出的成员，如果 就想 换个名称来接收，可以使用 as 来起别名




// 在 Node中，使用 var 名称 = require('模块标识符')
// module.export 和 exports 来暴露成员