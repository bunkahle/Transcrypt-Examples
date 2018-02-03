class TestSystem:
    
    def __init__ (self):
        self.testMessage = 'TestMessage'
    
    def alert_standard(self):
        alert(self.testMessage)
        
    def alert_text(self, text):
        alert(text)
        
testSystem = TestSystem()
