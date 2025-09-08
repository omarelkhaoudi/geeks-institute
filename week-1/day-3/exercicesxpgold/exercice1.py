# -- Geometry -- #
import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * (self.radius ** 2)

    def definition(self):
        print("A circle is a set of points in a plane that are at a fixed distance (radius) from a fixed point (center).")

circle1 = Circle(5)

print(f"Perimeter: {circle1.perimeter():.2f}")
print(f"Area: {circle1.area():.2f}")
circle1.definition()

circle2 = Circle()
print(f"\nDefault Circle Perimeter: {circle2.perimeter():.2f}")
print(f"Default Circle Area: {circle2.area():.2f}")
