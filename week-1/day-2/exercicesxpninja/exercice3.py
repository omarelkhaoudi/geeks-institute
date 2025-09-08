MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..', 
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', 
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', 
    '8': '---..', '9': '----.',
    ' ': '/'  # Use slash for space between words
}

def english_to_morse(text):
    text = text.upper()
    morse_text = ' '.join(MORSE_CODE_DICT.get(char, '') for char in text)
    return morse_text

def morse_to_english(morse_code):
    REVERSE_MORSE = {value: key for key, value in MORSE_CODE_DICT.items()}
    words = morse_code.split(' / ')
    decoded_words = []
    for word in words:
        letters = word.split()
        decoded_word = ''.join(REVERSE_MORSE.get(letter, '') for letter in letters)
        decoded_words.append(decoded_word)
    return ' '.join(decoded_words)

# --- Example Usage ---
text = "Hello World"
morse = english_to_morse(text)
print("English to Morse:", morse)

decoded = morse_to_english(morse)
print("Morse to English:", decoded)
