# 编辑按钮的实现
1.设置编辑按钮的样式
2.绑定单机响应事件(handleEdit)后 新添加一个isEdit属性 (添加isEdit属性使用$set来添加，不然页面没有响应
    注意：需要判断isEdit的值受否存在 不要一直set('isEdit'')
3.把isEdit属性设置给input框 （v-show)
4.调用失去焦点的回调函数(handleBlur)
    在input框中输入新的值 当失去焦点时更新todo.title
    dom事件 失去焦点blur
    使用事件总线来完成数据的传递
    input框为不能为空 
细节：1）在编辑时隐藏编辑按钮
     2）点击编辑按钮后自动获得焦点 其他编辑按钮失去焦点 -ref属性来获取input框 
     **nextTick**来在dom更新结束后执行回调 因为在点击按钮后input框还没有加载出来
    
