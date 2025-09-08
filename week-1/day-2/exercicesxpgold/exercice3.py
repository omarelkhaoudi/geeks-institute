def compute_sum(x: int) -> int:
    term1 = int(str(x))
    term2 = int(str(x) * 2)   # XX
    term3 = int(str(x) * 3)   # XXX
    term4 = int(str(x) * 4)   # XXXX
    
    return term1 + term2 + term3 + term4

print(compute_sum(3))  # Output: 3702
