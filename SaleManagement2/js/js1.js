$().ready(function() {
// 在键盘按下并释放及提交后验证提交表单
  $("#indexform").validate({
    rules:
      zhanghao: {
        required: true,
        minlength: 4
      }
    messages: {
      zhanghao: {
        required: "请输入密码",
        minlength: "密码长度不能小于 4 个字母"
      }
     }
    })
});