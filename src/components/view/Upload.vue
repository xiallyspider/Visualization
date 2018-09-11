<template>
  <div class="upload-wrapper">
    <div class="upload-box">
      <el-button type="primary" plain @click="uploadFile" size="small">excel上传</el-button>
      <el-button type="primary" plain @click="uploadFile" size="small">文档上传</el-button>
      <el-button type="primary" plain @click="uploadFile" size="small">图片上传</el-button>
    </div>
    <div class="content-box">
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div class="export-box">
       <el-button type="primary" @click="uploadFile" size="small">下载</el-button>
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
    readWorkBookFromLocalFile (file, callback) {
      var reader = new FileReader()
      reader.onload = function (e) {
        var data = e.target.reault
        var workbook = XLSX.read(data, {type: 'array'})
        if (callback) callback(workbook)
      }
    },
    uploadFile () {
      console.log(this.$refs.inputFile)
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
