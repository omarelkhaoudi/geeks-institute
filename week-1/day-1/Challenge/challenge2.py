user_string = input("Enter a string: ")
result = ""
if user_string:
    result = user_string[0]
for char in user_string[1:]:
    if char != result[-1]:
        result += char
print("String after removing consecutive duplicates:", result)