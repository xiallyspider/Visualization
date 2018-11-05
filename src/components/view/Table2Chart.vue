<template>
    <div class="table-to-chart-wrapper">
        <div class="left-chart">
            <div class="line-chart" id="line-chart">
            </div>
            <div class="bar-chart" id="bar-chart">
            </div>
            <div class="toolbox-content"></div>
        </div>
        <div class="right-table">
            <div class="table-content">
            </div>
        </div>
    </div>
</template>

<script>
// import echarts from 'echarts'
export default {
  data () {
    return {
      tableData: [],
      tableHtml: '',
      selectedColumn: [],
      selectedRow: [],
      defaultSelectedColumn: [],
      defaultSelectedRow: []
    }
  },
  mounted: {
  },
  methods: {
    initTable () {
      this.tableData = this.getRandomTableData()
      this.$nextTick(() => {
        this.tableHtml = this.createdCheckeableTable()
      })
    },
    // 表格测试数据生成函数,无数据时测试使用
    getRandomTableData () {
      var result = []
      for (var x = 0; x < 10; x++) {
        var obj = {}
        obj.name = '测试数据' + (x + 1)
        for (var y = 2010; y < 2020; y++) {
          obj[y + '年'] = Math.floor(Math.random() * 10)
        }
        result.push(obj)
      }
      return result
    },
    createdCheckeableTable (data) {
      var tableHtml = '<tr>'
      for (var x in data[0]) {
        // <input type='checkbox' class='full-check'/>
        tableHtml += x === 'name' ? '<td>指标名称<i class="icon-name-sort"></i></td>' : '<td calss="checkableText"><input type="checkbox" class="row-check"/>' + x + '<i class="icon-sort"></i></td>'
      }
      tableHtml += '</tr>'
      data.forEach(function (item, index) {
        tableHtml += '<tr>'
        for (var x in item) {
          tableHtml += x === 'name' ? '<td>' + item[x] + '<input type="checkbox" class="column-check"/></td>' : '<td>' + item[x] + '</td>'
        }
        tableHtml += '</tr>'
      })
      return tableHtml
    },
    initSelectedData: function () {
    // 默认选中的行和列数据初始化
      var self = this
      this.selectedColumn = []
      this.selectedRow = []
      this.defaultSelectedColumn = []
      this.defaultSelectedRow = []
      this.tableData.forEach(function (item, index) {
        if (index < self.selectedRowNum) {
          self.selectedRow[index] = item.name
          self.defaultSelectedRow[index] = item.name
        }
      })
      var tempArr = self.objToArr(self.tableData[0])
      self.selectedColumn = JSON.parse(JSON.stringify(tempArr.slice(0, self.selectedColumnNum)))
      self.defaultSelectedColumn = JSON.parse(JSON.stringify(tempArr.slice(0, self.selectedColumnNum)))
    }
  }
}
</script>

<style scoped>
.table-to-chart-wrapper {
    height: calc(100% - 40px);
    width: calc(100% - 40px);
    margin: 20px;
    box-sizing: border-box;
    box-shadow:0 2px 12px 0 rgba(0,0,0,.2);
    border-radius: 5px;
}
.left-chart {
    width: 50%;
    height: 100%;
    float: left;
}
.line-chart,.bar-chart{
    height: 50%;
    width: 100%;
    border: none;
    background-color: aliceblue;
}
.right-table {
    width: calc(50% - 2px);
    height: 100%;
    float: right;
}
.table-content {
    height: 100%;
    width: 100%;
    padding: 10px;
}
</style>
