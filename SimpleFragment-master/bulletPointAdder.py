#! python3
# bulletPointAdder.py - Adds Wikipedia bullet points to the start
# of each line of text on the clipboard.


# This is a random comment added to test out git version control in the repository
# Here's another random comment.
#Third
#Fourth random comment directly in GitHub
#Fifth
import pyperclip
text = pyperclip.paste()

#separate lines and add stars
lines = text.split('\n')
for i in range(len(lines)):  #loop through all indexes in the "lines" list
    lines[i] = '*' + lines[i] #add star to each string in "lines list"

print(lines)
text = '\n'.join(lines)
pyperclip.copy(text)
