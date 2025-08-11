def remove_consecutive_duplicates(s):
    result = ""
    for char in s:
        if not result or char != result[-1]:
            result += char
    return result

user_input = input("Enter a string: ")
new_string = remove_consecutive_duplicates(user_input)
print("New string:", new_string)