CASES = 10
res = open("result.txt", "w")

for i in range(1, 1+CASES):
    fail = False
    fastAns = open("fastAns.txt", "r")
    slowAns = open("slowAns.txt", "r")

    try:
        import gen
    except:
        res.write("Generator is broken\n")
        fail = True

    try:
        import fast
    except:
        res.write("Fast is invalid\n")
        fail = True

    try:
        import slow
    except:
        res.write("Slow is invalid\n")
        fail = True
    
    if not fail:
        if (fastAns.read().strip() != slowAns.read().strip()):
            res.write("The code failed on case "+str(i)+":\n\n")

            data = open("testData.txt", "r")
            res.write(data.read())
            
            fail = True
            data.close()
            

    fastAns.close()
    slowAns.close()

    if fail:
        break
    
if not fail:
    res.write("The code works!")

res.close()