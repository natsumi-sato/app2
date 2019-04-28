//  データストア
var imageStore = {
  debug: true,
  state: {
    property: {
      image: ''
    }
  },
  fileSelected(evt) {
    var file = evt.target.files.item(0); // 挺特別的
    var fileReader = new FileReader();
    fileReader.addEventListener('load', (event) => {
      this.image = event.target.result;
    });
    fileReader.readAsDataURL(file);
  }
}
export default imageStore