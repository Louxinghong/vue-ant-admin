<template>
  <div class="person-operation">
    <a-dropdown>
      <img class="avatar" src="@/assets/images/admin.png" alt="" />
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">个人信息</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">安全退出</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: "PersonOpertaion",
};
</script>

<style lang="less" scoped>
.avatar {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
