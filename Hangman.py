# To make sure the kernal stays in the output window
locked = True

# Importing required libraries
import time
import random as rd
import pandas as pd
from IPython.display import clear_output as clear
import os
from tkinter import *
os.system('Xvfb :1 -screen 0 1600x1200x16  &')    # create virtual display with size 1600x1200 and 16 bit color. Color can be changed to 24 or 8
os.environ['DISPLAY']=':0.0' 
from IPython.display import Image
# Image(filename='test.png') 

# Printing the rules
print("=========================Guess the word or get HANGED=========================")
time.sleep(0.5)
print("Rules:")
time.sleep(0.5)
print("Guess the next character in sequence that will make the correct word")
time.sleep(0.5)
print("You get have 5 lifelines")
time.sleep(0.5)
print("if you are wrong the sixth time.....")
time.sleep(0.5)
print("Oh the guy is HANGED!!!!")


# Function to convert string into list
def Convert(string):
    list1 = []
    list1[:0] = string
    return list1


again = "Y"

# Selecting the word length
# irow = rd.randint(0,4)

while again == "Y" or again == "y":

    irow = rd.randint(0,5)
    icol = rd.randint(0,4)
    wordlength = "_"*(icol+3)


    # Printing the empty spaces for the word
    givenans = Convert(wordlength)
    print(' '.join(givenans))


    # Getting the word for the current game
    words = pd.read_csv("hangman.csv")

    ans = Convert(words.iloc[irow,icol])


    lifelines = 5
    correctans = ans
    n = len(correctans)
    left = n
    while lifelines >0 and left >=1:
        print("Guess a character: ")
        ele = input()[:1]
        if ele not in correctans:
            lifelines -= 1
            print("That was a wrong guess! You only have %d lifelines left"%(lifelines))
        else:
            for i in range (n):
                if correctans[i] == ele:
                    left -= 1
                    givenans[i] = correctans[i]
                    print(str(' '.join(givenans)))
    if left == 0:
        print("Well done buddy! You saved a dying man")
        # display(Image(filename="happy-zoozoo.jpg"))
    else:
        print("The poor soul would be remembered!!!")
        # display(Image(filename='zoozoo-hanging-suicide.png'))
        print("Before he leaves the world let us tell him the correct answer was: ", str(''.join(correctans)))
        print("Well, what can we do, better luck next time")
    print("Do you want to play again: (Y|N): ")
    again = input()[:1]
    clear(wait = True)
