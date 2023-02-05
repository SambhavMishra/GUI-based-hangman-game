import pandas as pd
df = pd.read_csv('static\hangman.csv')
print(type(df.iloc[0,2]))
print(df.iloc[0,2])