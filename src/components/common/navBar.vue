<template>
  <div class="navBar">
    <dl class="navBar-list" v-for="item of list" :key="item.title">
      <dt class="navBar-title">{{ item.title }}</dt>
      <dd
        class="navBar-item"
        :class="{active:(isActive || firstEle)==sub }"
        @mouseover="tabActive(e,sub)"
        v-for="sub of item.children"
        :key="sub"
      >
        {{ sub }}
      </dd>

      <dd class="more">
        <a href="item.link">全部</a>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      isActive:null
    };
  },
  methods: {
    tabActive(e,item) {
      this.isActive = item
    },
  },
  computed:{
    firstEle(){
      return this.list[0].children[0];
    }
  }
};
</script>

<style scoped>
.navBar {
  width: 100%;
  background-color: inherit;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.navBar-list {
  display: flex;
  width: 100%;
}
.navBar-title {
  font-size: 18px;
  padding: 0 5px;
  margin-left: 13px;
  margin-right: 10px;
  font-family: "MFShangHei-Regular" !important;
}
.navBar-item {
  padding: 0 5px;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
}
 .navBar-item.active:after {
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #fff;
  content: " ";
  display: block;
  width: 2px;
  height: 0;
  top: 37px;
  left: 0;
  right: 0;
  margin: auto;
}

/* 更多 */
.more {
  position: absolute;
  right: 22px;
}
.more::after {
  content: "";
  display: inline-block;
  width: 9px;
  height: 9px;
  box-sizing: border-box;
  border: 2px solid #fff;
  margin-left: -2px;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 20%;
  transform: rotate(45deg) translateY(-1px);
}
a:hover {
  color: currentColor;
}
</style>