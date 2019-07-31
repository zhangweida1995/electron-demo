<template>
  <div class="platform">
    <el-button class="primary"
               @click="read">READ</el-button>
    <el-button class="primary"
               @click="write">WRITE</el-button>
    <div class="textarea-container">
      <el-input type="textarea"
                :rows="10"
                placeholder="请输入内容"
                v-model="textarea"></el-input>
    </div>
  </div>
</template>
<script>
import fs from 'fs'
export default {
  data () {
    return {
      value: '',
      textarea: ''
    }
  },
  methods: {
    read () {
      const root = fs.readdirSync('/')
      console.log(root)
      let res = fs.createReadStream('D:/username.txt');
      res.setEncoding('utf8');
      res.on('data', trunk => {
        this.textarea = trunk
      })
      res.on('end', () => {
        console.log('end')
      })
    },
    write () {
      fs.writeFile('D:/input.txt', this.textarea, function (err) {
        if (err) {
          return console.error(err);
        }
        alert('数据写入成功！')
        fs.readFile('D:/input.txt', function (err, data) {
          if (err) {
            return console.error(err);
          }
          console.log("异步读取文件数据: " + data.toString());
        });
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.platform {
  text-align: center;
  min-width: 600px;
}
.primary {
  background-color: #409eff;
}
.textarea-container {
  margin-top: 30px;
}
</style>
