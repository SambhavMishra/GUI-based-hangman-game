# # # from tkinter import *
# # # from tkinter import messagebox
# # # from tkinter import ttk
# # # root = Tk()
# # # root.geometry("500x300")
# # # frm = ttk.Frame(root, padding=10)
# # # frm.grid()
# # # ttk.Label(frm, text="Hello world!").grid(row=1,column=16)
# # # ttk.Label(frm, text="Nice to meet you").grid(row=6, column = 8)
# # # ttk.Label(frm, text="Guess a letter").grid(row=16, column=1)
# # # ttk.Label(frm, text="Bye").grid(row=64, column=1)
# # # ttk.Button(frm, text="Quit", command=root.destroy).grid(row=64, column=64)
# # # root.mainloop()
# # # # messagebox.showinfo(message = "Okay bye!")


# # # from tkinter import *
# # # from tkinter import ttk
# # # import time

# # # root = Tk()
# # # e = Entry(root)
# # # # root.geometry("500x300")
# # # root.title("Hangman")
# # # # frm = ttk.Frame(root, padding=10)
# # # # frm.grid()

# # # def blink():
# # #     e.config(bg="green")
# # #     e.after(1000, lambda: e.config(bg="white"))
    


# # # # ttk.Label(frm, text="Guess the word or leave the world").grid(row=0,column=0)
# # # # time.sleep(0.5)
# # # # ttk.Label(frm, text="Rules: ").grid(row=1, column=0)
# # # b = Button(root, text="blink",command=blink)
# # # b.pack()
# # # # ttk.Button(frm, text="Quit", command = root.destroy).grid(row=10, column=0)
# # # root.mainloop()










# # from tkinter import *

# # def blink():
# #     e.config(bg='green')
# #     e.after(1000, lambda: e.config(bg='white')) # after 1000ms

# # root = Tk()
# # e = Entry(root)
# # e.pack()
# # b = Button(root, text='blink', command=blink)
# # b.pack()
# # root.mainloop()








# from tkinter import *
# from tkinter import ttk

# def calculate(*args):
#     try:
#         value = float(feet.get())
#         meters.set(int(0.3048*value*10000.0 + 0.5)/10000.0)
#     except ValueError:
#         pass


# root = Tk()
# root.title("Feet to meters")

# mainframe = ttk.Frame(root, padding='3 3 12 12')
# mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
# root.columnconfigure(0, weight=1)
# root.rowconfigure(0, weight=1)


# feet = StringVar()
# feet_entry = ttk.Entry(mainframe, width=7, textvariable=feet)
# feet_entry.grid(column=2, row=1, sticky=(W,E))

# meters = StringVar()
# ttk.Label(mainframe, textvariable=meters).grid(column=2, row=2, sticky=(W,E))


# ttk.Button(mainframe, text='Calculate', command=calculate).grid(column=1, row=3, sticky=W)

# ttk.Label(mainframe, text="feet").grid(column=3, row=1, sticky=W)
# ttk.Label(mainframe, text=" is equivalent to").grid(column=1, row=2, sticky=E)
# ttk.Label(mainframe, text=" meters").grid(column=3, row=2, sticky=W)


# ttk.Button(mainframe, text="Quit", command=root.destroy).grid(column=3, row=3, sticky=(S,W))
# for child in mainframe.winfo_children():
#     child.grid_configure(padx=5, pady=5)

# feet_entry.focus()
# root.bind("<Return>", calculate)

# root.mainloop()





import tkinter as tk

def onKeyPress(event):
    Text.insert('end','You pressed %s\n'%(event.char,))

root = tk.Tk()
root.geometry('300x300')
Text = tk.Text(root, background='black', foreground='white')
Text.pack()
root.bind('<KeyPress>', onKeyPress)
root.mainloop()



# from tkinter import *
# from tkinter import ttk 
# import pandas as pd

# root = Tk()
# root.title("The Hangman Game")
# mainframe = ttk.Frame(root, padding='3 3 12 12')
# mainframe.grid(row=0, column=0, sticky=(N, W, S, E))
# mainframe.columnconfigure(0, weight=1)
# mainframe.rowconfigure(0, weight=1)
# text = Text(root)

# def onKeyPress(event):
#     text.insert('end','You pressed %s\n'%(event.char))

# def game():
#     # word = pd.read_csv("hangman.csv")
#     # unknown = ['_']*len(word)
#     root.bind('<KeyPress>', onKeyPress)
#     # for i in range(5):
#     #     # letter = text.get()
#     #     # if letter in word:
#     #     #     text.set("This is a correct guess")
#     #     #     unknown[word.index(letter)] = letter
#     #     # else:
#     #     #     text.set("This is incorrect guess")
#     #     pass

# ttk.Label(mainframe, text="Welcome to the game").grid(column=3, row=1, sticky=W)
# ttk.Button(mainframe, text='Start', command=game).grid(column=1, row=3, sticky=W)
# root.mainloop()



