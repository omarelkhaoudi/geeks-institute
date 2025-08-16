import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter")
    
    @property
    def diameter(self):
        return self.radius * 2
    
    @property
    def area(self):
        return math.pi * self.radius ** 2
    
    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area:.2f})"
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented
    
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        return NotImplemented
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def draw(self, turtle_obj):
        turtle_obj.pendown()
        turtle_obj.circle(self.radius)
        turtle_obj.penup()
        turtle_obj.sety(turtle_obj.ycor() - 10) 

c1 = Circle(radius=50)
c2 = Circle(diameter=100)
c3 = Circle(radius=30)

circles = [c3, c1, c2]
circles.sort()  

for c in circles:
    print(c)

screen = turtle.Screen()
screen.title("Sorted Circles")
t = turtle.Turtle()
t.penup()
t.setx(-150)  

for c in circles:
    c.draw(t)

turtle.done()
