//  データストア
var PropertyStore = {
  debug: true,
  state: {
    property: {
      type: '1',
      itemName: '',
      listPrice: '',
      sellPrice: '',
      brand: '',
      category: '',
      color: '',
      postage: '',
      point: '',
      importFlag: '',
      stock: '',
      detail: '',
      seibun: '',
      mainImage: '',
    }
  },
  validate () {
    this.debug && console.log('setMessageAction triggered with', this.state.property.nickname)

    console.log(this.state.property.nickname.length)
    if (this.state.property.nickname.length <= 3) {
      throw new Error('3文字以上入力してください')
    }
    return true
  }
}
export default PropertyStore