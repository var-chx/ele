<template>
	<div>
		<head-top></head-top>
		<section class="data_section">
			<header class="section_title">数据统计</header>
			<el-row :gutter="20" style="margin-bottom:10px">
				<el-col :span="4"><div class="data_list data_head ">当日数据</div></el-col>
				<el-col :span="4"><div class="data_list"><span>10</span>新增用户</div></el-col>
				<el-col :span="4"><div class="data_list"><span>50</span>新增商家</div></el-col>
				<el-col :span="4"><div class="data_list"><span>50</span>新增商家</div></el-col>
			</el-row>
			<el-row :gutter="20">
				<el-col :span="4"><div class="data_list data_head num_data ">总数据</div></el-col>
				<el-col :span="4"><div class="data_list"><span>10</span>新增用户</div></el-col>
				<el-col :span="4"><div class="data_list"><span>50</span>新增商家</div></el-col>
				<el-col :span="4"><div class="data_list"><span>50</span>新增商家</div></el-col>
			</el-row>
		</section>
		<div id="myChart" :style="{width: '80%', height: '450px'}"></div>
	</div>
</template>

<script>
export default {
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      var myChart = this.$echarts.init(document.getElementById("myChart"));
      var option = {
        angleAxis: {},
        radiusAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四"],
          z: 10
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "A",
            stack: "a"
          },
          {
            type: "bar",
            data: [2, 4, 6, 8],
            coordinateSystem: "polar",
            name: "B",
            stack: "a"
          },
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "C",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          data: ["A", "B", "C"]
        }
      };

      // 绘制图表
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="less">
//统计数据的样式 start-----------------------------
.data_section {
  padding: 20px;
  margin-bottom: 40px;
  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    background-color: #eff2f7;
    text-align: center;
    font-size: 16px;
    border-radius: 6px;
    color: #666;
    span {
      font-size: 26px;
    }
  }
  .data_head {
    font-size: 26px;
    background-color: #ff9800;
  }
  .num_data {
    background-color: #20a0ff;
  }
}
//统计数据的样式 end--------------------------------
</style>