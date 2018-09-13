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
        <div class="table-box" v-html="tableHtml" ref="tableContent" contenteditable>
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
      var sheet = XLSX.utils.table_to_sheet(this.$refs.tableContent)
      this.openDownloadDialog(this.sheet2blob(sheet), this.tableName + '.xlsx')
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
    openDownloadDialog (url, saveName) {
      if (typeof url === 'object' && url instanceof Blob) {
        url = URL.createObjectURL(url) // 创建blob地址
      }
      var aLink = document.createElement('a')
      aLink.href = url
      aLink.download = saveName || '' // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
      var event
      if (window.MouseEvent) {
        event = new MouseEvent('click')
      } else {
        event = document.createEvent('MouseEvents')
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      }
      aLink.dispatchEvent(event)
    },
    sheet2blob (sheet, sheetName) {
      sheetName = sheetName || 'sheet1'
      var workbook = {
        SheetNames: [sheetName],
        Sheets: {}
      }
      workbook.Sheets[sheetName] = sheet
      // 生成excel的配置项
      var wopts = {
        bookType: 'xlsx', // 要生成的文件类型
        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        type: 'binary'
      }
      var wbout = XLSX.write(workbook, wopts)
      var blob = new Blob([s2ab(wbout)], {type: 'application/octet-stream'})
      // 字符串转ArrayBuffer
      function s2ab (s) {
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
        return buf
      }
      return blob
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
