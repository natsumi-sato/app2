<template>
  <div id="editWrap">
    <div class="form-group">
      <label>商品名</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>定価</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>販売価格</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>ブランド</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>カテゴリ</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>カラー</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>容量</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>送料</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>ポイント</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>並行輸入品フラグ</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>在庫数</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>商品詳細</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>成分</label>
      <input type="text">
    </div>
    <div class="form-group">
      <label>メイン画像</label>
      <input type="file">
    </div>
  </div>
</template>

商品画像 N枚(最低1枚, 余裕ができたらN枚)


<script>
export default {
  name: "Edit",
  data() {
    return {
      msg: "あああ"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
