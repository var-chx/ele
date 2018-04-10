<template>
<div>
	<head-top></head-top>
	<el-table
		:data="tableData5"
		style="width: 100%">
		<el-table-column type="expand">
		<template slot-scope="props">
			<el-form label-position="left" inline class="demo-table-expand">
			<el-form-item label="商品名称">
				<span>{{ props.row.name }}</span>
			</el-form-item>
			<el-form-item label="所属店铺">
				<span>{{ props.row.shop }}</span>
			</el-form-item>
			<el-form-item label="商品 ID">
				<span>{{ props.row.id }}</span>
			</el-form-item>
			<el-form-item label="店铺 ID">
				<span>{{ props.row.shopId }}</span>
			</el-form-item>
			<el-form-item label="商品分类">
				<span>{{ props.row.category }}</span>
			</el-form-item>
			<el-form-item label="店铺地址">
				<span>{{ props.row.address }}</span>
			</el-form-item>
			<el-form-item label="商品描述">
				<span>{{ props.row.desc }}</span>
			</el-form-item>
			</el-form>
		</template>
		</el-table-column>
		<el-table-column
		label="商品 ID"
		prop="id">
		</el-table-column>
		<el-table-column
		label="商品名称"
		prop="name">
		</el-table-column>
		<el-table-column
		label="描述"
		prop="desc">
		</el-table-column>
		<el-table-column label="操作">
			<template slot-scope="scope">
				<el-button
				@click="dialogFormVisible = true"
				size="mini"
				
				>编辑</el-button>
				<el-button
				size="mini"
				@click="handleEdit(scope.$index, scope.row)">添加食品</el-button>
				<el-button
				size="mini"
				type="danger"
				 @click="open2">删除</el-button>
			</template>
    	</el-table-column>
	</el-table>

		<el-dialog title="修改商家信息" :visible.sync="dialogFormVisible">
		<el-form :model="form">
			<el-form-item label="活动名称" :label-width="formLabelWidth">
			<el-input v-model="form.name" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="活动区域" :label-width="formLabelWidth">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		</div>
	</el-dialog>
</div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      tableData5: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
    };
  },
  methods: {
    open2() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>