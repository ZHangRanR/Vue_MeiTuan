<template>
  <div class="category-nav-container">
    <!-- 全部分类 -->
    <dl class="category-nav">
      <dt>全部分类</dt>
      <!-- 类别子项 -->

      <dd
        v-for="item in categoryList"
        :key="item.title"
        @mouseenter="showList(item.title)"
        @mouseleave="hiddleList"
      >
        <!-- 字体图标 -->
        <i class="iconfont" :class="item.iconfont"></i>

        <!-- 子类名称 -->
        <span>
          <span>
            <a href="javascript:void()" target="_blank" class="title"
              >{{ item.title[0] }}
            </a>
          </span>
          <span v-for="t in item.title.slice(1)" :key="t">
            /
            <a href="javascript:void()" target="_blank" class="title">{{
              t
            }}</a>
          </span>

          <span v-if="item.hot" class="nav-promotion">HOT</span>
        </span>

        <!-- 字体图标 箭头 -->
        <i class="iconfont icon-arrow-right"></i>
      </dd>
    </dl>

    <!-- 分类详细列表 -->
    <div
      class="category-detail"
      :class="{ active: isActive }"
      @mouseenter="showList()"
      @mouseleave="hiddleList"
    >
      <div
        v-for="item in categoryList"
        :key="item.title"
        class="detai-wrapper"
        :class="{ active: item.title == activeItem }"
      >
        <div
          v-for="(itemS, index) in item.children"
          :key="index"
          class="detail-area"
        >
          <div class="detail-title-wrapper">
            <h4>
              <a href="javascript:void(0)" class="detail-title">{{
                itemS.title
              }}</a>
            </h4>
            <span class="more">
              更多
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </div>
          <div class="detail-nav-wrapper">
            <a
              href="javascript:void(0)"
              v-for="itemS_item in itemS.children"
              :key="itemS_item"
            >
              {{ itemS_item }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [
        // 美食
        {
          title: ["美食"],
          iconfont: "icon-food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点饮品",
                "火锅",
                "自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "香锅烤鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡酒吧茶馆",
                "云贵菜",
                "东南亚菜",
                "海鲜",
                "素食",
                "台湾/客家菜",
                "创意菜",
                "汤/粥/炖菜",
                "蒙餐",
                "新疆菜",
                "其他美食",
                "京菜鲁菜",
              ],
            },
          ],
        },
        // 外卖
        {
          title: ["外卖"],
          iconfont: "icon-waimai",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"],
            },
          ],
        },
        // 酒店
        {
          title: ["酒店"],
          iconfont: "icon-hotel",
          hot: "true",
          children: [
            {
              title: "酒店星级",
              children: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
            },
          ],
        },
        // 民宿
        {
          title: ["民宿"],
          iconfont: "icon-minsu",
          children: [
            {
              title: "热门城市",
              children: [
                "上海",
                "成都",
                "北京",
                "重庆",
                "南京",
                "杭州",
                "广州",
                "西安",
                "武汉",
                "厦门",
                "长沙",
                "青岛",
                "深圳",
                "天津",
                "苏州",
              ],
            },
            {
              title: "热门房源",
              children: ["复式Loft", "别墅"],
            },
          ],
        },
        // 猫眼电影
        {
          title: ["猫眼电影"],
          iconfont: "icon-maoyan",
          children: [
            {
              title: "热映电影",
              children: [
                "失控玩家",
                "怒火·重案",
                "明日之战",
                "峰爆",
                "妈妈的神奇小子",
                "陪你很久很久",
                "不期而遇的夏天",
                "1950",
                "他们正年轻",
                "白蛇2：青蛇劫起",
                "夏日友晴天",
              ],
            },
          ],
        },
        // 机票 火车票
        {
          title: ["机票", "火车票"],
          iconfont: "icon-plane",
          children: [
            {
              title: "机票",
              children: ["国内机票", "国际/港澳台机票"],
            },
            {
              title: "火车票",
              children: ["火车票"],
            },
          ],
        },
        // 休闲娱乐 KTV
        {
          title: ["休闲娱乐", "KTV"],
          iconfont: "icon-ktv",
          children: [
            {
              title: "休闲娱乐",
              children: [
                "足疗按摩",
                "洗浴/汗蒸",
                "酒吧",
                "密室逃脱",
                "轰趴馆",
                "茶馆",
                "私人影院",
                "DIY手工坊",
                "采摘/农家乐",
                "网吧网咖",
                "游乐游艺",
                "VR",
                "桌面游戏",
                "真人CS",
                "棋牌室",
                "其他玩乐",
              ],
            },
            {
              title: "KTV",
              children: ["KTV"],
            },
          ],
        },
        // 生活服务
        {
          title: ["生活服务"],
          iconfont: "icon-life",
          children: [
            {
              title: "生活服务",
              children: [
                "衣物/皮具洗护",
                "家政",
                "搬家运输",
                "送水",
                "充值缴费",
                "服饰/鞋包养护",
                "开锁换锁",
                "居家维修",
                "管道疏通",
                "家电维修清洗",
                "电脑维修",
                "机维修",
                "证件照/肖像摄影",
                "照片冲印/图文文印",
                "商务服务/法律服务",
                "文化传媒机构",
                "成人用品/情趣用品",
              ],
            },
          ],
        },
        // 丽人 美发 医学美容
        {
          title: ["丽人", "美发", "医学美容"],
          iconfont: "icon-beauty",
          children: [
            {
              title: "丽人",
              children: [
                "美发",
                "美甲美睫",
                "美容美体",
                "医学美容",
                "瑜伽舞蹈",
                "瘦身纤体",
                "韩式定妆",
                "祛痘",
                "纹身",
                "化妆品",
                "养发",
              ],
            },
          ],
        },
        // 结婚 婚纱摄影 婚宴
        {
          title: ["结婚", "婚纱摄影", "婚宴"],
          iconfont: "icon-married",
          children: [
            {
              title: "结婚",
              children: [
                "婚纱摄影",
                "旅拍",
                "个性写真",
                "婚宴",
                "婚庆公司",
                "婚纱礼服",
                "西服定",
                "制婚戒首饰",
                "婚车租赁",
                "司仪主持",
                "彩妆造型",
                "婚礼跟拍",
                "婚礼小礼品",
                "更多婚礼服务",
              ],
            },
          ],
        },
        // 亲子 儿童乐园 幼教
        {
          title: ["亲子", "儿童乐园", "幼教"],
          iconfont: "icon-child",
          children: [
            {
              title: "儿童乐园",
              children: ["婴儿游泳", "其它亲子游乐"],
            },
            {
              title: "幼儿教育",
              children: [
                "早教中心",
                "少儿英语",
                "智力开发",
                "托班/幼儿园",
                "幼儿教育",
                "其他幼儿教育",
              ],
            },
            {
              title: "亲子摄影",
              children: ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"],
            },
            {
              title: "孕产护理",
              children: [
                "月子会所",
                "产后恢复",
                "妇幼医院",
                "孕产用品",
                "开奶催乳",
                "月嫂",
                "亲子购物",
                "宝宝派对",
                "亲子服务",
              ],
            },
          ],
        },
        // 运动健身 健身中心
        {
          title: ["运动健身", "健身中心"],
          iconfont: "icon-sport",
          children: [
            {
              title: "运动健身",
              children: [
                "健身中心",
                "武术场馆",
                "游泳馆",
                "羽毛球馆",
                "溜冰场",
                "射箭馆",
                "篮球场",
                "网球馆",
                "台球馆",
                "乒乓球",
                "足球场",
                "高尔夫场",
                "保龄球馆",
                "体育场馆",
                "马术场",
                "壁球馆",
                "更多运动",
              ],
            },
          ],
        },
        // 家装 建材 家居
        {
          title: ["家装", "建材", "家居"],
          iconfont: "icon-decorate",
          children: [
            {
              title: "装修设计",
              children: ["半包装修", "全包装修", "清包装修"],
            },
            {
              title: "装修建材",
              children: [
                "地板",
                "瓷砖石材",
                "橱柜",
                "灯饰照明",
                "厨卫洁具",
                "油漆涂料",
                "集成吊顶",
                "墙纸墙艺",
                "门窗",
                "木材板材",
                "家用五金",
                "电工电料",
                "楼梯",
                "管材管件",
              ],
            },
            {
              title: "家具家居",
              children: [
                "家具",
                "床上用品/家纺",
                "家居饰品",
                "厨具餐具",
                "智能家居",
              ],
            },
            {
              title: "家装卖场",
              children: ["建材卖场", "家居卖场", "灯饰卖场"],
            },
          ],
        },
        // 学习培训 音乐培训
        {
          title: ["学习培训", "音乐培训"],
          iconfont: "icon-education",
          children: [
            {
              title: "音乐培训",
              children: [
                "钢琴",
                "吉他",
                "小提琴",
                "古筝",
                "架子鼓",
                "声乐",
                "其他音乐培训",
              ],
            },
            {
              title: "职业技术",
              children: [
                "美容化妆",
                "会计",
                "IT",
                "厨艺",
                "管理培训",
                "摄影培训",
                "司法考试",
                "公务员培训",
                "其他职业培训",
              ],
            },
            {
              title: "外语培训",
              children: [
                "英语",
                "日语",
                "韩语",
                "法语",
                "德语",
                "汉语",
                "俄语",
                "西班牙语",
                "其他外语",
              ],
            },
            {
              title: "美术培训",
              children: ["绘画", "书法", "其他美术"],
            },
          ],
        },
        // 医疗健康 宠物 爱车
        {
          title: ["医疗健康", "宠物", "爱车"],
          iconfont: "icon-medical",
          children: [
            {
              title: "医疗健康",
              children: [
                "医院",
                "齿科口腔",
                "体检中心",
                "药店",
                "中医",
                "其他健康服务",
              ],
            },
            {
              title: "爱车",
              children: [
                "洗车",
                "租车",
                "加油站",
                "维修保养",
                "驾校",
                "汽车美容",
                "陪练",
                "汽车用品",
                "停车场",
                "汽车保险",
                "4S店/汽车销售",
                "更多汽车服务",
                "机油保养",
                "汽车报价",
                "二手车",
                "广告驾校",
                "交警队",
                "汽车改装",
                "汽车配件",
              ],
            },
            {
              title: "宠物",
              children: ["宠物店", "宠物医院"],
            },
          ],
        },
        // 酒吧 密室逃脱
        {
          title: ["酒吧", "密室逃脱"],
          iconfont: "icon-bar",
          children: [
            {
              title: "玩乐",
              children: [
                "KTV",
                "酒吧",
                "密室逃脱",
                "游乐游艺",
                "网吧网咖",
                "私人影院",
                "DIY手工坊",
                "桌面游戏",
                "采摘/农家乐",
                "棋牌室",
                "轰趴馆",
                "真人CS",
                "VR",
                "其他玩乐",
              ],
            },
          ],
        },
      ],
      activeItem: "",
      isActive: false,
      timer: null,
    };
  },

  methods: {
    showList(t) {
      clearTimeout(this.timer);
      this.activeItem = t || this.activeItem;
      this.isActive = true;
    },
    hiddleList() {
      this.timer = setTimeout(() => {
        this.activeItem = "";
        this.isActive = false;
      }, 200);
    },
  },
};
</script>

<style scoped>
/* 分类列表 样式 */
.category-nav-container {
  padding: 15px 0 8px 0;
  height: 425px;
  box-sizing: border-box;
}

.category-nav dt {
  height: 45px;
  box-sizing: border-box;
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  margin-left: 15px;
  /* margin-bottom: 10px; */
}

.category-nav dd {
  position: relative;
  box-sizing: border-box;
  padding: 2px 12px;
  line-height: 20px;
  height: 25.44px;
  /* font-size: 14px; */
}

/* 类别子项名 */
.title {
  font-size: 13px;
  line-height: 20px;
  height: 20px;
  color: #646464;
  cursor: pointer;
}

/* 箭头图标 */
.icon-arrow-right {
  position: absolute;
  right: 13px;
  top: -1px;
  bottom: 0;
  width: 4px;
  height: 4px;
  color: #bfbfbf;
  border-bottom: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  transform: rotate(-45deg);
  display: block;
  margin: auto;
}

/* HOT 样式 */
.nav-promotion {
  font-size: 10px;
  color: #222222;
  background: #fff3cc;
  display: inline-block;
  border-radius: 10px;
  padding: 0 7px;
  margin-left: 5px;
  box-sizing: border-box;
  transform: scale(0.9);
  position: relative;
  opacity: 1;
}

/* 当鼠标移入时 */
.category-nav dd:hover {
  background: rgba(255, 150, 0, 0.08);
  color: #000;
}

.category-nav dd:hover .title {
  font-weight: 700;
  color: #000;
}

.category-nav dd:hover .icon-arrow-right {
  border-color: #000;
}

.category-nav dd:hover .nav-promotion {
  opacity: 1;
  font-weight: 400;
  background: linear-gradient(to bottom right, #ffd000, #ffbd00);
}

/* 详细列表样式 */
.category-detail {
  display: none;
  position: absolute;
  top: 60px;
  left: 230px;
  width: 400px;
  height: 416px;
  background-color: #fff;
  z-index: 199;
  color: #666;
  overflow: hidden;
}
.detai-wrapper {
  display: none;
}
.category-detail .detail-area {
  padding: 0 30px;
}
/* 标题样式 */
.category-detail .detail-title-wrapper {
  margin-top: 24px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.category-detail .detail-title {
  font-size: 16px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
  margin-top: 24px;
  height: 22px;
  line-height: 22px;
}

.category-detail .more {
  font-size: 12px;
  color: #999;
  font-weight: 400;
  margin-right: 6px;
  position: relative;
  cursor: pointer;
}
.category-detail .more .icon-arrow-right {
  right: -6px;
  bottom: -4px;
}
.detail-nav-wrapper a {
  color: #999;
  font-size: 12px;
  line-height: 15px;
  display: inline-block;
  margin-right: 16px;
  margin-top: 10px;
  cursor: pointer;
}
.active {
  display: block;
}

.detail-nav-wrapper a:hover {
  color: #fe8c00;
}
</style>