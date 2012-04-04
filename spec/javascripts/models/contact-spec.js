describe("Contact", function() {
  it("instantiates", function() {
    var contact = new Contact({ screenName: 'froots101' });
    expect(contact).toHaveModelAttribute('screenName', 'froots101');
  });
});