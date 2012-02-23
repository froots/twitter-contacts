describe 'ContactList', ->
	describe 'when instantiated', ->
		it 'is empty', ->
			@list = new ContactList()
			expect(@list.length).toEqual 0
		
		