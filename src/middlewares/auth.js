export default {
    isLogin: function() {
        return localStorage.getItem("token") ? {
            status: true,
            message: "Bạn đã đăng nhập!"
        } : {
            status: false,
            message: "Bạn chưa đăng nhập!"
        };
    }
}