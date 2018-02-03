class TestSystem:
    
    def __init__ (self):
        self.testMessage = 'TestMessage'
    
    def alert_standard(self):
        alert(self.testMessage)
        
    def alert_text(self, text):
        alert(text)

    def prompt_text(self):
        entry = prompt('Please enter any text','')
        alert(entry)

    def greet_name(self):
        name = prompt('What is your name?','Transcrypt-User');
        alert('Hallo, ' + name);
        
testSystem = TestSystem()
