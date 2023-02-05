import pandas as pd
import random as rd

class Hangman():
    def getWord(self):
        df = pd.read_csv('static\hangman.csv')
        row = rd.randint(0,5)
        col = rd.randint(0,4)

        word = df.iloc[row,col]
        return word
        

def main():
    pass

if __name__ == '__main__':
    main()

# def getWord():
#     return "beautiful"

# word = getWord()
# print(word)