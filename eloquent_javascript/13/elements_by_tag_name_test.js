

describe('some js on this page', function() {
  it('should test some stuff', function() {
    console.log(document.body);
    expect(byTagName(document.body, 'h1').length).to.equal(1);
    expect(byTagName(document.body, 'span').length).to.equal(3);
    var para = document.querySelector('p');
    expect(byTagName(para, 'span').length).to.equal(2);
  })
})
