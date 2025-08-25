# from datetime import datetime

# birthdate_str = input("Enter your birthdate (DD/MM/YYYY): ")

# birthdate = datetime.strptime(birthdate_str, "%d/%m/%Y")
# today = datetime.today()

# age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
# last_digit = age % 10

# def is_leap_year(year):
#     return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

# candles = "i" * last_digit if last_digit > 0 else ""
# candle_line = f"   ___{candles}___"
# cake = f"""
# {candle_line}
#   |:H:a:p:p:y:|
# __|___________|__
# |^^^^^^^^^^^^^^^^^|
# |:B:i:r:t:h:d:a:y:|
# |                 |
# ~~~~~~~~~~~~~~~~~~~
# """

# if is_leap_year(birthdate.year):
#     print(cake * 2)
# else:
#     print(cake)
