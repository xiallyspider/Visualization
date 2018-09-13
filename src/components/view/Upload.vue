<template>
  <div class="upload-wrapper">
    <div class="upload-box">
      <el-upload
        ref="upload"
        action="/wm/upload/"
        :show-file-list="false"
        accept=".xlsx"
        :multiple="isMultiple"
        :on-change="readExcel"
        :auto-upload="false">
      <el-button
          slot="trigger"
          icon="el-icon-upload"
          size="small"
          type="primary">
        上传文件
      </el-button>
      <p>只支持.xlsx格式文件，表格内容可编辑</p>
    </el-upload>
    </div>
    <div class="content-box">
      <el-card class="box-card">
        <div class="table-box" v-html="tableHtml" contenteditable>
        </div>
      </el-card>
    </div>
    <div class="export-box">
       <el-button type="primary" @click="downloadFile" size="small">下载</el-button>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  data () {
    return {
      isMultiple: false,
      tableHtml: '',
      tableJson: {},
      tableName: ''
    }
  },
  methods: {
    readExcel (file) {
      var self = this
      var reader = new FileReader()
      reader.onload = (file) => {
        var data = file.target.result
        var workBook = XLSX.read(data, {type: 'binary'})
        var sheetNames = workBook.SheetNames
        self.tableName = sheetNames[0]
        var worksheet = workBook.Sheets[sheetNames[0]]
        var csv = XLSX.utils.sheet_to_csv(worksheet)
        self.tableHtml = self.csv2table(csv)
      }
      reader.readAsBinaryString(file.raw)
    },
    downloadFile () {
      var aoa = this.jsonToAoA(this.tableJson)
    },
    csv2table (csv) {
      var html = '<table>'
      var rows = csv.split('\n')
      rows.pop()
      rows.forEach((row, idx) => {
        var columns = row.split(',')
        html += '<tr>'
        columns.forEach((column) => {
          html += '<td>' + column + '</td>'
        })
        html += '</tr>'
      })
      html += '</table>'
      return html
    },
    table2csv (table) {
      // var csv = []
      // $(table).find('tr').each(function() {
      //   var temp = []
      //   $(this).find('td').each(function() {
      //     temp.push($(this).html())
      //   })
      //   temp.shift()
      //   csv.push(temp.join(','))
      // })
      // csv.shift()
      // return csv.join('\n')
    },
    csv2sheet (csv) {
      var sheet = {}
      csv = csv.split('\n')
      csv.forEach((row, i) => {
        row = row.split(',')
        if (i === 0) sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1)
        row.forEach((col, j) => {
          sheet[String.fromCharCode(65 + j) + (i + 1)] = {v: col}
        })
      })
      return sheet
    },
    jsonToAoA () {
      var aoa = []
      return aoa
    }
  }
}
</script>

<style>
.upload-wrapper {
  height: 100%;
  width: 100%;
}
.upload-box {
  height: 100%;
  width: 200px;
  float: left;
}
.content-box {
  height: 100%;
  width: calc(100% - 440px);
  margin-left: 200px;
  padding: 0 20px;
}
.table-box table{
  table-layout: fixed;
  border-collapse: collapse;
  empty-cells: hide;
}
.table-box table td {
  border: 1px solid #000;
  height: 25px;
}
.export-box {
  height: 100%;
  width: 200px;
  position: absolute;
  top: 0px;
  right: 0px;
}
.el-upload p {
  font-size: 10px;
}
.el-card {
  height: calc(100% - 20px);
  margin: 10px 0;
}
.export-box .el-button {
    position: absolute;
    bottom: 40px;
    right: 80px;
    width: 120px;
}
</style>
