def get_full_name(first_name, last_name, middle_name=""):
    """
    Returns the full name with optional middle name.
    Capitalizes the first letter of each name.
    """
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    return full_name.title()  # Capitalize each word

# Examples
print(get_full_name(first_name="ahmed", middle_name="sefrioui", last_name="lee"))  # Ahmed Sefrioui Lee
print(get_full_name(first_name="karim", last_name="lee"))  # Karim Lee
