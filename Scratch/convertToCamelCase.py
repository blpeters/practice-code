def digitize(n):
    arr = []
    for char in str(n):
        num = int(char)
        arr += num
    return arr[::-1]

print(digitize(12345))
print(digitize(235231))
