# define function to initialize triangles of the given size
cols = 36 # size of the loss triangle in months
weight = 12 # number of months used in the development factor weights

def initializeTriangle(size):
    triangle=[]
    for origin in range(size):
        triangle.append([])
        for development in range(size - origin):
            triangle[origin].append([])
    return triangle

# initialize a loss triangle and a cumulative triangle
lossTriangle = initializeTriangle(cols)
cumulativeTriangle = initializeTriangle(cols)

# initialize a list for the numerators, denominators and development factors
numerators = [0] * (cols-1)
denominators = [0] * (cols-1)
developmentFactors = [0.0] * (cols - 1)
cumulativeDevelopmentFactors = [1.0] * (cols)

#initialize variables
ultimate = 0
reserve = 0