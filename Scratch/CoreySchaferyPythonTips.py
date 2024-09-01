# 10 Python tips for better code

# 1 - Ternary operator
condition = False
x = 1 if condition else 0

print(x)

# 2 Formatting large numbers for readability
num1 = 10_000_000_000 # Add underscores for readability - the interpreter will ignore
num2 = 10_000_000
z = num1 + num2
print(f"{z:,}") # use f string formatting as shown to output numbers with commas for readability

# 3 This is bad code below for handling opening and closing files. Code smell. Usea  context manage instead
# f = open('test.txt', 'r')
# file_contents - f.read()
# f.close()
# words = file_contents.split(' ')
# word_count = len(word)
# print(word_count)

# Using a context manager. Not just working with files. Use any time you are creating and tearing down resources (Databases, threads, etc.)
# with open('test.txt', 'r') as f:
#     file_contents - f.read()        # Notice block indent. After reading, Python will manage the memory resources for us.
# words = file_contents.split(' ')
# word_count = len(word)
# print(word_count)

# 4 Use the enumerate function if you need a counter. Quit declaring i variables or whatever. Pythonic code uses enumerate to use the index values.
names = ['Corey', 'Chris', 'Dave', 'Travis']
for index, name in enumerate(names, start = 1):        # enumerate includes the index along with the value. You can even change the starting number.
    print(index, name)

# 5 Similar to number 4 tip above, this is for looping through 2 lists. Don't use enumerate for this though! -Use the zip() function!!
names = ['Peter Parker', 'Clark Kent', 'Wade Wilson', 'Bruce Wayne']
superheroes = ['Spiderman', 'Superman', 'Deadpool', 'Batman']

for name, hero in zip(names, superheroes):
    print(f"{name} is actually {hero}")     # zips equal length arrays together. Can do it for more than two also. zip creates individual tuples containing names and heros for each index. you can access this as well

# 6 Unpacking values
a, _ = (1, 2)

print(a)
# print(b)   #if you aren't going to use variable b, you can change the declaration of a variable to an underscore.

# Alternate unpacking for more values than variables:
a, b, *c = (1, 2, 3, 4, 5) # Use the asterisk to assign everything from 3 on to variable c.
print(a)
print(b)
print(c)

# This also works in reverse if you want to unpack the first two, but ignore the rest with *_:
a, b, *_ = (1, 2, 3, 4, 5) # Use the asterisk to assign everything from 3 on to variable c.
print(a)
print(b)
# print(c)

# 7 Getting and setting attributes on a certain object.

class Person():
    pass

person = Person()

person.first = "Brett"  # common way to assign attribute
person.last = "Peters"

# what if the attribute we want to set is the value of another variable?:
first_key = 'first'
first_val = 'Brett'

setattr(person, first_key, first_val) # Instead of example above, this allows setting via variables

first = getattr(person, first_key)  # The same methodology works for getting variables

print(person.first)
print(first)

# Here's a use-case:

person_info = {'first': 'KK', 'last': 'Karas'}  # Dict with the attributes we want to assign to a person object.
for key, value in person_info.items():
    setattr(person, key, value)

print(person.first)
print(person.last)

# What if you want to grab the keys? getattr():
for key in person_info.keys():
    print(getattr(person, key))

# 8 Dealing with secret information. Hiding input text - getpass module in python:
from getpass import getpass
username = input('Username: ')
password = getpass('Password: ')    # getpass will conceal keyboard inputs.

print(username)
print(password)

# 9 Running python code from the terminal with the -m notation.
# python -m venv ....
# python -m smtpd -c DebuggingServer -n localhost:1025  (This smtpd module takes arguments -c and -n)
# You can import the module to review the arguments a module can take.
# python
# import <module name>
# help(<module name>)
# ^ know how to look stuff up

# Alternatively use the dir() function on an object to see the methods available.

from datetime import datetime
dir(datetime)
# The -m will automatically look elsewhere for specified modules named after -m. Look up corey's videos on this



