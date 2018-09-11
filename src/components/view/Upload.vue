<template>
  <div>
    <div>
      <input type="file" id="file" ref="inputFile" style="display:none;" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
      <el-button type="primary" plain @click="uploadFile">数据上传</el-button>
    </div>
  </div>
</template>

<script>
// import XLSX  from 'XLSX';
// export default {
//   data () {
//     return {

//     }
//   },
//   methods: {
//     readWorkBookFromLocalFile (file, callback) {
//       var reader = new FileReader()
//       reader.onload = function(e) {
//         var data = e.target.reault
//         var workbook = XLSX.read(data, {type: 'array'})
//         if(callback) callback(workbook)
//       }
//     },
//     uploadFile () {
//       console.log(this.$refs.inputFile)
//     }
//   }
// }  
</script>

<style>

</style>
