<template>
  <div class="upload-wrapper">
    <div class="upload-box">
     <input calss="upload-input" ref="uploadInput" @change="uploadChange" type="file" accept=".xlsx" >
     <span class="upload-btn" @click="uploadClicked">上传excel</span>
    </div>
    <div class="content-box">
      <el-card class="box-card">
        <div class="text item">
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
    }
  },
  methods: {
    readWorkbookFromLocalFile (file) {
      var self = this
      var reader = new FileReader()
      reader.onloadend = function (e) {
        var data = e.target.reault
        var workbook = XLSX.read(data, {type: 'array'})
        self.readWorkbook(workbook)
      }
      reader.readAsBinaryString(file)
    },
    readWorkbook (workbook) {
      console.log('read of the workbook')
      console.log(workbook)
    },
    downloadFile () {
      console.log(this.$refs.inputFile)
    },
    uploadClicked () {
      this.$refs.uploadInput.click()
    },
    uploadChange (e) {
      var files = e.target.files
      if (files.length === 0) return
      var f = files[0]
      if (!/\.xlsx$/g.test(f.name)) {
        alert('仅支持读取xlsx格式！')
        return
      }
      console.log(files)
      this.readWorkbookFromLocalFile(f)
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
.export-box {
  height: 100%;
  width: 200px;
  position: absolute;
  top: 0px;
  right: 0px;
}
.upload-box .el-button {
  margin-top: 20px;
  width: 120px;
  margin-left: 20px
}
.upload-box input {
  width: 120px;
  display: none;
}
.upload-btn {
  border: 1px solid #1296db;
  border-radius: 4px;
  width: 120px;
  margin-left: 40px;
  height: 30px;
  display: block;
  line-height: 30px;
  cursor: pointer;
  margin-top: 20px;
}
.upload-btn:hover {
  background-color: #1296db;
  color: #FFF;
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
