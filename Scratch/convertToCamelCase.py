import re

s = "anvionelaman"
numerator = len(re.findall("[a-m]", s))
denominator = len(s)
print(f"{numerator}/{denominator}")