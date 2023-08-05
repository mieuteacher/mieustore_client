export default {
    isLogin: function() {
        return localStorage.getItem("token") ? {
            status: true,
            message: "next!"
        } : {
            status: false,
            message: "Bạn chưa đăng nhập!"
        };
    }
}