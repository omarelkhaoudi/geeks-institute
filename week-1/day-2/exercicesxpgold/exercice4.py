import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    throws = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        throws += 1
        if dice1 == dice2:
            break
    return throws

def main():
    results = []  
    
    for _ in range(100):  
        results.append(throw_until_doubles())
    
    total_throws = sum(results)
    average_throws = total_throws / len(results)
    
    print(f"It took {total_throws} throws in total to reach 100 doubles.")
    print(f"On average, it took {average_throws:.2f} throws to reach doubles.")

# Run program
main()
