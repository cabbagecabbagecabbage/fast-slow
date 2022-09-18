import sys
import random

FILE = open("slowAns.txt", "w")
data = open("testData.txt", "r")
sys.stdout = FILE
input = data.readline

n = int(input())
for i in range(n):
    a, b = map(int, input().split())
    
    print(a+b)
    
print(0)

FILE.close()
data.close()