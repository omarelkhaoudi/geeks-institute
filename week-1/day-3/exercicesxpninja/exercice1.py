class Phone:
    def __init__(self, phone_number):
        # Initialize phone number, call history, and messages list
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        # Record outgoing call and print it
        call_str = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_str)
        self.call_history.append(call_str)
        # Record incoming call for the other phone
        other_phone.call_history.append(f"{other_phone.phone_number} received a call from {self.phone_number}")

    def show_call_history(self):
        # Print all calls in call history
        print(f"Call history for {self.phone_number}:")
        for call in self.call_history:
            print("-", call)

    def send_message(self, other_phone, content):
        # Create a message dictionary and add it to both sender and receiver
        message = {"to": other_phone.phone_number, "from": self.phone_number, "content": content}
        self.messages.append(message)
        other_phone.messages.append(message)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}: {content}")

    def show_outgoing_messages(self):
        # Print messages sent from this phone
        print(f"Outgoing messages from {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(f"To {msg['to']}: {msg['content']}")

    def show_incoming_messages(self):
        # Print messages received by this phone
        print(f"Incoming messages for {self.phone_number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(f"From {msg['from']}: {msg['content']}")

    def show_messages_from(self, from_number):
        # Print messages received from a specific number
        print(f"Messages for {self.phone_number} from {from_number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number and msg["from"] == from_number:
                print(f"- {msg['content']}")

# --- Testing ---
phone1 = Phone("123-456-7890")
phone2 = Phone("987-654-3210")

# Make calls
phone1.call(phone2)
phone2.call(phone1)

# Show call histories
phone1.show_call_history()
phone2.show_call_history()

# Send messages
phone1.send_message(phone2, "Hi, how are you?")
phone2.send_message(phone1, "I am fine, thanks!")

# Show messages
phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from("987-654-3210")
