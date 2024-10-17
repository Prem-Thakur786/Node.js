#pip install eel 
import eel

eel.init('D:\prem\HTML')   # Folder Name

@eel.expose
def App():  #App Main Function
    print("Application Running")

App()

eel.start('index.html', size=(800,800)):
 # index.html is the main html file

