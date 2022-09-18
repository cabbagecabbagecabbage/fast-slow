import sys
import random

FILE = open("fastAns.txt", "w")
data = open("testData.txt", "r")
sys.stdout = FILE
input = data.readline

n = int(input())
for i in range(n):
    a, b = map(int, input().split())
    
    print(a+b)

FILE.close()
data.close()