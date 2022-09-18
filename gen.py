from random import randint
data = open("testData.txt", "w")

n = 10
data.write(str(n)+"\n")
for i in range(10):
    data.write(str(randint(1, 10))+" "+str(randint(1, 10))+"\n")

data.close()