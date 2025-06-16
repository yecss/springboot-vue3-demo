<template>
  <div>
    <h2>欢迎{{ user.uname }}！您的 uid 为{{ user.uid }}</h2>
    <router-link to="/login">
      <el-button> 登出 </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        uname: "",
        uid: null,
      },
    };
  },
  created() {
    // 页面加载时获取 sessionStorage 中的用户信息
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo && userInfo.uid) {
      this.user.uid = userInfo.uid;
      this.user.uname = userInfo.uname;
    } else {
      this.user.uid = "未知用户";
    }
  },
};
</script>

<style scoped>
</style>