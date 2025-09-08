# game_of_life.py
# Conway's Game of Life
# Version complète avec deux implémentations :
# 1) Grille fixe (2D array)
# 2) Grille extensible (sparse set)

from typing import List, Iterable, Tuple

# ======================
# Partie I : Fixed Grid
# ======================

class Grid:
    """Mutable 2D grid of booleans (False=dead, True=alive)."""
    def __init__(self, rows: int, cols: int, fill: bool=False):
        self.rows = rows
        self.cols = cols
        self.data = [[fill for _ in range(cols)] for _ in range(rows)]
    
    def in_bounds(self, r: int, c: int) -> bool:
        return 0 <= r < self.rows and 0 <= c < self.cols
    
    def get(self, r: int, c: int) -> bool:
        if not self.in_bounds(r, c): 
            return False
        return self.data[r][c]
    
    def set(self, r: int, c: int, val: bool):
        if self.in_bounds(r, c):
            self.data[r][c] = val
    
    def copy(self) -> "Grid":
        g = Grid(self.rows, self.cols)
        for r in range(self.rows):
            g.data[r] = self.data[r][:]
        return g
    
    def __iter__(self):
        return iter(self.data)


class GameOfLifeFixed:
    """Conway's Game of Life with fixed borders."""
    NEIGHBORS = [(-1,-1), (-1,0), (-1,1),
                 (0,-1),          (0,1),
                 (1,-1),  (1,0),  (1,1)]
    
    def __init__(self, rows: int, cols: int, alive_positions: Iterable[Tuple[int,int]]=()):
        self.grid = Grid(rows, cols, fill=False)
        for r, c in alive_positions:
            self.grid.set(r, c, True)
        self.generation = 0
    
    def count_neighbors(self, r: int, c: int) -> int:
        return sum(self.grid.get(r+dr, c+dc) for dr, dc in self.NEIGHBORS)
    
    def step(self):
        next_grid = self.grid.copy()
        for r in range(self.grid.rows):
            for c in range(self.grid.cols):
                alive = self.grid.get(r, c)
                n = self.count_neighbors(r, c)
                if alive and (n < 2 or n > 3):
                    next_grid.set(r, c, False)
                elif not alive and n == 3:
                    next_grid.set(r, c, True)
        self.grid = next_grid
        self.generation += 1
    
    def display(self, alive_char="■", dead_char="·"):
        print(f"Generation {self.generation}")
        for row in self.grid:
            print("".join(alive_char if cell else dead_char for cell in row))
        print()


# ===========================
# Partie II : Sparse / Infini
# ===========================

class GameOfLifeSparse:
    """Sparse (virtually infinite) Game of Life using a set of live cells."""
    NEIGHBORS = [(-1,-1), (-1,0), (-1,1),
                 (0,-1),          (0,1),
                 (1,-1),  (1,0),  (1,1)]
    
    def __init__(self, alive_positions: Iterable[Tuple[int,int]]=(), max_size: int=10_000):
        self.alive = set(alive_positions)
        self.generation = 0
        self.max_size = max_size
    
    def step(self):
        candidates = set()
        for r, c in self.alive:
            candidates.add((r, c))
            for dr, dc in self.NEIGHBORS:
                candidates.add((r+dr, c+dc))
        
        new_alive = set()
        for r, c in candidates:
            n = sum((r+dr, c+dc) in self.alive for dr, dc in self.NEIGHBORS)
            if (r, c) in self.alive:
                if 2 <= n <= 3:
                    new_alive.add((r, c))
            else:
                if n == 3:
                    new_alive.add((r, c))
        
        if new_alive:
            min_r = min(r for r,_ in new_alive)
            max_r = max(r for r,_ in new_alive)
            min_c = min(c for _,c in new_alive)
            max_c = max(c for _,c in new_alive)
            if (max_r - min_r + 1) > self.max_size or (max_c - min_c + 1) > self.max_size:
                raise MemoryError("Reached maximum configured border size.")
        
        self.alive = new_alive
        self.generation += 1
    
    def bounds(self, padding: int=1):
        if not self.alive:
            return (0, 0, 0, 0)
        min_r = min(r for r,_ in self.alive) - padding
        max_r = max(r for r,_ in self.alive) + padding
        min_c = min(c for _,c in self.alive) - padding
        max_c = max(c for _,c in self.alive) + padding
        return (min_r, max_r, min_c, max_c)
    
    def display(self, alive_char="■", dead_char="·", padding: int=1, max_print: int=80000):
        print(f"Generation {self.generation}  |  Live cells: {len(self.alive)}")
        if not self.alive:
            print("(All cells are dead)\n")
            return
        
        min_r, max_r, min_c, max_c = self.bounds(padding)
        rows = max_r - min_r + 1
        cols = max_c - min_c + 1
        
        if rows * cols > max_print:
            print(f"(Grid too large to display: {rows}x{cols})\n")
            return
        
        for r in range(min_r, max_r+1):
            line = []
            for c in range(min_c, max_c+1):
                line.append(alive_char if (r, c) in self.alive else dead_char)
            print("".join(line))
        print()


# ======================
# Exemples d'utilisation
# ======================

if __name__ == "__main__":
    # Patterns
    BLOCK     = [(0,0),(0,1),(1,0),(1,1)]
    BLINKER   = [(0,1),(1,1),(2,1)]
    GLIDER    = [(0,1),(1,2),(2,0),(2,1),(2,2)]
    
    print("=== Version à Grille Fixe ===")
    game = GameOfLifeFixed(10, 20, alive_positions=[(r+1, c+1) for r,c in GLIDER])
    for _ in range(5):
        game.display()
        game.step()
    
    print("=== Version Sparse / Infinie ===")
    game_inf = GameOfLifeSparse(GLIDER)
    for _ in range(8):
        game_inf.display(padding=2)
        game_inf.step()
