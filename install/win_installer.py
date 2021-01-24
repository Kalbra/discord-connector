from io import StringIO, BytesIO
from tkinter import *
import requests
import json
import zipfile
from PIL import Image, ImageTk

EXTENSIONS_PATH = "C:\Program Files\Common Files\Adobe\CEP\extensions"

master = Tk()
master.title = "Adobe Discord connector installer"
master.configure(background='#192b5d')
master.resizable(width=False, height=False)
master.overrideredirect(True)

load = Image.open("../docs/preview-image-small.png")
render = ImageTk.PhotoImage(load)
Label(master, image=render).grid(row=0)


def get_from_remote():
    new_url = requests.get("https://api.github.com/repos/Kalbra/discord-connector/releases").json()[0]["zipball_url"]
    print(new_url)

    raw_zip = BytesIO(requests.get(new_url).content)
    raw_zip.name = "discord-connector"

    zip_file = zipfile.ZipFile(raw_zip)
    print(zip_file.namelist()[0])
    zip_file.extractall(EXTENSIONS_PATH)

    bottom_button["text"] = "Done"


#Label(master, text="Adobe Discord connector installer").grid(row=0)
bottom_button = Button(master, text="Install", command=get_from_remote)
bottom_button.grid(row=1, sticky="nsew")
Button(master, text="Quit", command=master.quit).grid(row=2, sticky="nsew")

mainloop( )