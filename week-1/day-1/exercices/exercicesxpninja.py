# exercice1

# Output:
# x is True
# y is False
# a: 5
# b: 10

# exercice2
# longest_sentence = ""

# while True:
#     sentence = input("Enter the longest sentence you" \
#     " can without the letter 'A'"
#     " (or type 'quit' to stop): ")

#     if sentence.lower() == "quit":
#         print("Goodbye!")
#         break

#     if "a" in sentence.lower():
#         print("Oops! Your sentence contains " \
#         "the letter 'A'. Try again.")
#         continue

#     if len(sentence) > len(longest_sentence):
#         longest_sentence = sentence
#         print(f"Congratulations! New record with {len(sentence)} characters!")
#     else:
#         print(f"Not a new record. Current record: {len(longest_sentence)} characters.")

# exercice3

# import re

# paragraph = (
#     "The newspapers are the storehouse of day-to-day happenings in the world. "
#     "They add to our knowledge not only about our own country but also about world affairs. "
#     "They express their opinion about social and political problems through their editorials. "
#     "In a democracy, the press is a link between the government and the people."
# )

# num_chars = len(paragraph)

# sentences = re.split(r'[.?!]\s*', paragraph.strip())
# sentences = [s for s in sentences if s]
# num_sentences = len(sentences)

# words = re.findall(r'\b\w+\b', paragraph.lower())
# num_words = len(words)

# unique_words = set(words)
# num_unique = len(unique_words)

# num_non_ws = len([ch for ch in paragraph if not ch.isspace()])

# avg_words_per_sentence = num_words / num_sentences if num_sentences else 0

# num_non_unique = num_words - num_unique

# # Results
# print("Analysis of the paragraph:\n")
# print(f"Characters (including spaces): {num_chars}")
# print(f"Sentences: {num_sentences}")
# print(f"Words: {num_words}")
# print(f"Unique words: {num_unique}")
# print(f"Non-whitespace characters: {num_non_ws}")
# print(f"Average words per sentence: {avg_words_per_sentence:.2f}")
# print(f"Non-unique words: {num_non_unique}")

