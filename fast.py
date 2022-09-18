
import sys
FILE = open("fastAns.txt", "w")
data = open("testData.txt", "r")
sys.stdout = FILE
input = data.readline

FILE.close()
data.close()
