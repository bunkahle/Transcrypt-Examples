class TestSystem:
    
    def __init__ (self):
        self.testMessage = 'TestMessage'

    def prompt_text(self):
        entry = prompt('Please enter any text','')
        if entry == "":
            alert("Nothing has been entered")
        if entry is None:
            alert("None - Cancel has been pressed")
        alert("Entry was:"+entry)
        return entry

    def prompt_test(self):
        ret = self.prompt_text()
        document.getElementById("result").innerHTML = "Result of entry:"+ret

    def greet_name(self):
        name = prompt('What is your name?','Transcrypt-User')
        alert('Hallo, ' + name)
        
testSystem = TestSystem()
